import { useAppSelector } from './state/hooks'
import { selectBills } from './state/slices/bill-slice';

import { useFetchBills } from './hooks/use-fetch-bills'
import { BillsTable } from './ui/components/bills-table'
import './App.css'

const App = () => {
  useFetchBills()
  const bills = useAppSelector(selectBills)

  return (
    <div className="App">
      <header className="App-header">
        <BillsTable bills={bills} />
      </header>
    </div>
  )
}

export default App
