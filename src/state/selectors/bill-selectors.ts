import type { RootState } from '../store'

export const getAllBills = (state: RootState) => state.bills.bills
