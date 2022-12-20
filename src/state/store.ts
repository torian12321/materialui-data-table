import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import billsReducer from './slices/bill-slice'
import optionsReducer from './slices/options-slice'

export const store = configureStore({
  reducer: {
    bills: billsReducer,
    options: optionsReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
