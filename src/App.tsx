import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useFetchBills } from './hooks/use-fetch-bills'
import { BillsTable } from './ui/components/bills-table'
import { ModalDetails } from './ui/components/modal-details'
import Filters from './ui/layout/filters'
import { useAppSelector } from './state/hooks'
import { getFilteredBills, getFilteredFavoriteBills } from './state/selectors/bill-selectors'
import TabPanel from './ui/components/tabs-panel'
import './App.css'

const App = () => {
  useFetchBills()
  const [tabIndex, setTabIndex] = useState(0);
  const bills = useAppSelector(getFilteredBills)
  const billsFavorites = useAppSelector(getFilteredFavoriteBills)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  }

  return (
    <div className="app">
      <div className="app-body">
        <Filters />
        <ModalDetails />

        <Tabs value={tabIndex} onChange={handleChange} aria-label="table-tabs">
          <Tab label="All Bills" />
          <Tab label={`Favorite Bills (${billsFavorites.length})`} />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <BillsTable bills={bills} />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <BillsTable bills={billsFavorites} />
        </TabPanel>
      </div>
    </div>
  )
}

export default App
