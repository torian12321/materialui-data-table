import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FiltersState {
  status?: string
  type?: string
}

export const initialState: FiltersState = {
  status: undefined,
  type: undefined,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
    clearStatusFilter: (state) => {
      state.status = undefined
    },
    setTypeFilter: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    clearTypeFilter: (state) => {
      state.type = undefined
    },
  },
})

export const {
  setStatusFilter,
  clearStatusFilter,
  setTypeFilter,
  clearTypeFilter,
} = filtersSlice.actions

export default filtersSlice.reducer
