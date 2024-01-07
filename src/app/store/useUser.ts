import { authService } from '@/shared/service/auth.service'
import { AuthServiceTokens } from '@/shared/utils'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IUserProps {
	id: number
	isAdmin: boolean
}

export interface IUserStore {
	user: IUserProps | null
	setUser: (data: IUserProps) => void
	logout: () => void
	checkAuth: () => void
}
export const useUser = create<IUserStore>()(
	persist(
		(set, get) => ({
			user: null || ({} as IUserProps),
			setUser: (data: IUserProps) => set({ user: data }),
			logout: () => (
				set({ user: null }), AuthServiceTokens.removerTokenFromStorage()
			),
			checkAuth: async () => {
				try {
					const resp = await authService.getNewToken()
					AuthServiceTokens.saveTokenToStorage(resp.newToken.refreshToken)
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
