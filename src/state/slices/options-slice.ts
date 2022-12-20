import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { BillId } from '../../types/legislations'
import type { RootState } from '../store'

export interface OptionsState {
  selectedBill?: BillId // bill number ID
  tablePage: number
  rowsPerPage: number
}

export const initialState: OptionsState = {
  selectedBill: undefined,
  tablePage: 0,
  rowsPerPage: 5,
}

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    goToNextPage: (state) => {
      state.tablePage += 1
    },
    goToPrevPage: (state) => {
      if(state.tablePage > 0) {
        state.tablePage -= 1
      }
    },
    selectBill: (state, action: PayloadAction<BillId>) => {
      state.selectedBill = action.payload
    },
    unselectBill: (state) => {
      state.selectedBill = undefined
    },
    setRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload
    },
  },
})

export const {
  goToNextPage,
  goToPrevPage,
  selectBill,
  unselectBill,
  setRowsPerPage,
} = optionsSlice.actions

export const selectOptions = (state: RootState) => state.options
export const selectSelectedBill = (state: RootState) => state.options.selectedBill
export const selectRowsPerPage = (state: RootState) => state.options.rowsPerPage

export default optionsSlice.reducer
