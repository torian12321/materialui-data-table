import type { RootState } from '../store'
import { getBillById } from './bill-selectors'

export const getOptions = (state: RootState) => state.options
export const getRowsPerPage = (state: RootState) => state.options.rowsPerPage
export const getSelectedBill = (state: RootState) => {
  const selectedBill = state.options.selectedBill
  if(!selectedBill) {
    return undefined
  }

  return getBillById(state, selectedBill)
}