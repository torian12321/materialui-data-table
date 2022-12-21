import type { BillId } from '../../types/legislations'
import type { RootState } from '../store'
import { getTypeFilter, getStatusFilter} from './filters-selectors'

export const getAllBills = (state: RootState) => state.bills.bills
export const getBillById = (state: RootState, id: BillId) => {
  const bills = getAllBills(state)
  return bills.find(bill => bill.number === id)
}

export const getFilteredBills = (state: RootState) => {
  const allBills = getAllBills(state)
  const typeFilter = getTypeFilter(state)
  const statusFilter = getStatusFilter(state)

  return allBills
    .filter(bill => !statusFilter || bill.status === statusFilter)
    .filter(bill => !typeFilter || bill.type === typeFilter)
}
