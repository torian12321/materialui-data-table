import { useAppDispatch, useAppSelector } from './state/hooks'
import { selectBills, setSelection } from './state/slices/bill-slice';

import { useFetchBills } from './hooks/use-fetch-bills'
import { BillsTable } from './ui/components/bills-table'
import './App.css'

const App = () => {
  const dispatch = useAppDispatch()
  useFetchBills()
  const bills = useAppSelector(selectBills)

  const handleSeeDetails = (billId: number) => {
    console.log('billId', billId)
    dispatch(setSelection(billId))
  }

  return (
    <div className="App">
      <header className="App-header">
        <BillsTable
          bills={bills}
          onClickSeeDetails={handleSeeDetails}
        />
      </header>
    </div>
  )
}

export default App
