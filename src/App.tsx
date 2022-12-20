import { useFetchBills } from './hooks/use-fetch-bills'
import { BillsTable } from './ui/components/bills-table'
import './App.css'

const App = () => {
  useFetchBills()

  return (
    <div className="App">
      <header className="App-header">
        <BillsTable />
      </header>
    </div>
  )
}

export default App
