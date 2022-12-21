import type { BillId } from '../../types/legislations'
import type { Bill } from '../slices/bill-slice'
import type { RootState } from '../store'
import { getTypeFilter, getStatusFilter} from './filters-selectors'

export const getFavorites = (state: RootState) => state.bills.favorites
export const getAllBills = (state: RootState) => state.bills.bills
export const getAllFavoriteBills = (state: RootState): Bill[] => {
  const favorites = getFavorites(state)
  return favorites.map(favorite => getBillById(state, favorite)) as Bill[]
}

export const getBillById = (state: RootState, id: BillId) => {
  const bills = getAllBills(state)
  return bills.find(bill => bill.number === id)
}

const filterBills = (state: RootState, bills: Bill[]): Bill[] => {
  const typeFilter = getTypeFilter(state)
  const statusFilter = getStatusFilter(state)

  return bills
    .filter(bill => !statusFilter || bill.status === statusFilter)
    .filter(bill => !typeFilter || bill.type === typeFilter)
}

export const getFilteredBills = (state: RootState) =>
  filterBills(state, getAllBills(state))

export const getFilteredFavoriteBills = (state: RootState) =>
  filterBills(state, getAllFavoriteBills(state))
