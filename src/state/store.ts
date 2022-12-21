import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import billsReducer from './slices/bill-slice'
import optionsReducer from './slices/options-slice'
import filtersReducer from './slices/filters-slice'

export const store = configureStore({
  reducer: {
    bills: billsReducer,
    options: optionsReducer,
    filters: filtersReducer,
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
