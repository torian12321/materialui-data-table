import type { BillId } from '../../types/legislations'
import type { RootState } from '../store'

export const getAllBills = (state: RootState) => state.bills.bills
export const getBillById = (state: RootState, id: BillId) => {
  const bills = getAllBills(state)
  return bills.find(bill => bill.number === id)
}
