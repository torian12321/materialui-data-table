import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Bill {
  number: number,
  type: string,
  status: string,
  sponsor: string[],
  // contextDate: string,
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value

export default billsSlice.reducer
