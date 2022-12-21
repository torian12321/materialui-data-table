import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { BillType, BillStatus } from '../../types/legislations'
import type { BillId } from '../../types/legislations'

export interface Bill {
  number: BillId
  type: BillType
  status: BillStatus
  sponsor: string[]
  titleEn: string
  titleGa: string
  shortTitleEn: string
  shortTitleGa: string
}
export interface BillsState {
  loading: boolean
  total: number
  bills: Bill[]
  favorites: BillId[]
}

export const initialState: BillsState = {
  loading: false,
  total: 0,
  bills: [],
  favorites: [],
}

export const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload
    },
    add: (state, action: PayloadAction<Bill>) => {
      state.bills = [
        ...state.bills,
        action.payload
      ]
    },
    addBills: (state, action: PayloadAction<Bill[]>) => {
      state.bills = [
        ...state.bills,
        ...action.payload
      ].reduce((accBills: Bill[], currentBill) => {
          // Prevent duplicated Ids
          if(accBills.find(b => b?.number === currentBill.number)) {
            return accBills
          }
          return [...accBills, currentBill]
      }, [])
    },
    addFavorite: (state, action: PayloadAction<BillId>) => {
      state.favorites.push(action.payload)
    },
    removeFavorite: (state, action: PayloadAction<BillId>) => {
      state.favorites = state.favorites.filter(favorite => favorite !== action.payload)
    },
  },
})

export const {
  setLoading,
  setTotal,
  add,
  addBills,
  addFavorite,
  removeFavorite,
} = billsSlice.actions

export default billsSlice.reducer
