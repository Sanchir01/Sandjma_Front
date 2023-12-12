import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IUserProps {
	id: number
	isAdmin: boolean
}

export interface IUserStore {
	user: IUserProps | null
	setUser: (data: IUserProps) => void
}
export const useUser = create<IUserStore>()(
	persist(
		(set, get) => ({
			user: null,
			setUser: (data: IUserProps) => set({ user: data })
		}),
		{
			version: 0,
			name: 'user',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
