import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { BillType, BillStatus } from '../../types/legislations'
import type { RootState } from '../store';

export interface Bill {
  number: number,
  type: BillType,
  status: BillStatus,
  sponsor: string[],
}
export interface BillsState {
  loading: boolean
  total: number
  bills: Bill[]
}

const initialState: BillsState = {
  loading: false,
  total: 0,
  bills: []
};

export const billsSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    add: (state, action: PayloadAction<Bill>) => {
      state.bills = [
        ...state.bills,
        action.payload
      ]
    },
    addBills: (state, action: PayloadAction<Bill[]>) => {
      console.log('action.payload', action.payload)
      state.bills = [
        ...state.bills,
        ...action.payload
      ]
    },
  },
});

export const {
  setLoading,
  setTotal,
  add,
  addBills,
} = billsSlice.actions

export const selectBills = (state: RootState) => state.bills.bills

export default billsSlice.reducer
