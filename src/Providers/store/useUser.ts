import { authService } from '@/shared/service/auth.service'
import { myRequest, userService } from '@/shared/service/user.service'
import { AuthServiceTokens } from '@/shared/utils/Tokens.service'
import { LogoutDocument } from 'gql/gql/graphql'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IUserProps {
	id: number
	email: string
	isAdmin: boolean
}

export interface IUserStore {
	user: IUserProps | null
	setUser: (data: IUserProps) => void
	logout: () => void
	checkAuth: () => void
	resetUser: () => void
}
export const useUser = create<IUserStore>()(
	persist(
		(set, get) => ({
			user: null,
			setUser: (data: IUserProps) => set({ user: data }),
			resetUser: () => set({ user: null }),
			logout: () => (
				set({ user: null }),
				AuthServiceTokens.removerTokenFromStorage(),
				myRequest.request(LogoutDocument)
			),
			checkAuth: async () => {
				try {
					const { getProfile } = await userService.getProfile()
					set({ user: getProfile })
				} catch (er) {
					const { logout } = get()
					logout()
				}
			}
		}),
		{
			version: 0,
			name: 'user',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
