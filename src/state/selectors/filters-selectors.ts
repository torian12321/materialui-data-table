import type { RootState } from '../store'

export const getFilters = (state: RootState) => state.filters
export const getFilterByName = (state: RootState, name: 'type' | 'status') =>
  state.filters[name]

export const getTypeFilter = (state: RootState) =>
 state.filters.type

export const getTypeStatus = (state: RootState) =>
 state.filters.status
