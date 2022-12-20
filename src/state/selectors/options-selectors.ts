import type { RootState } from '../store'

export const getOptions = (state: RootState) => state.options
export const getSelectedBill = (state: RootState) => state.options.selectedBill
export const getRowsPerPage = (state: RootState) => state.options.rowsPerPage
