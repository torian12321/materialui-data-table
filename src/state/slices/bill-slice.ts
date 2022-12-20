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
}

const initialState: BillsState = {
  loading: false,
  total: 0,
  bills: [],
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
  },
})

export const {
  setLoading,
  setTotal,
  add,
  addBills,
} = billsSlice.actions

export default billsSlice.reducer
