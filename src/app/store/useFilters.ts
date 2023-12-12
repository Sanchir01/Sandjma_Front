import { create } from 'zustand'
export interface IFiltersStore {
	sorting: string
	changeSorting: (data: string) => void
}

export const useFilters = create<IFiltersStore>(set => ({
	sorting: '',
	changeSorting: (data: string) => set({ sorting: data })
}))
