import { useFetchBills } from './hooks/use-fetch-bills'
import { BillsTable } from './ui/components/bills-table'
import { ModalDetails } from './ui/components/modal-details'
import Filters from './ui/layout/filters'
import './App.css'

const App = () => {
  useFetchBills()

  return (
    <div className="App">
      <header className="App-header">
        <Filters />
        <ModalDetails />
        <BillsTable />
      </header>
    </div>
  )
}

export default App
