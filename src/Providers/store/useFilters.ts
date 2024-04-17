import { create } from 'zustand'
export interface IFiltersStore {
	sorting: string
	category: string
	color: string
	insulation: string
	pagination: string
	changeSorting: (data: string) => void
	changeCategory: (data: string) => void
	changeColors: (data: string) => void
	changeInsulation: (data: string) => void
	changePagination: (data: string) => void
	resetFilters: () => void
}

export const useFilters = create<IFiltersStore>(set => ({
	sorting: '',
	category: '',
	color: '',
	insulation: '',
	pagination: '1',
	changeCategory: (data: string) => set({ category: data }),
	changeSorting: (data: string) => set({ sorting: data }),
	changeColors: (data: string) => set({ color: data }),
	changeInsulation: (data: string) => set({ insulation: data }),
	changePagination: (data: string) => set({ pagination: data }),
	resetFilters: () =>
		set({
			sorting: '',
			category: '',
			insulation: '',
			color: '',
			pagination: '1'
		})
}))
