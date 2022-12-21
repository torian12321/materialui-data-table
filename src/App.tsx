import { useFetchBills } from './hooks/use-fetch-bills'
import { BillsTable } from './ui/components/bills-table'
import { ModalDetails } from './ui/components/modal-details'
import Filters from './ui/layout/filters'
import './App.css'

const App = () => {
  useFetchBills()

  return (
    <div className="app">
      <div className="app-body">
        <Filters />
        <ModalDetails />
        <BillsTable />
      </div>
    </div>
  )
}

export default App
