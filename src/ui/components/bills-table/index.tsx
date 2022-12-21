import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { getFilteredBills, getFavorites } from '../../../state/selectors/bill-selectors'
import { selectBill } from '../../../state/slices/options-slice'
import { addFavorite, removeFavorite } from '../../../state/slices/bill-slice'

import Table from './bills-table'
import Pagination from './bills-table-pagination'
import './bills-table.css'

export const BillsTable = () => {
  const dispatch = useAppDispatch()
  const bills = useAppSelector(getFilteredBills)
  const favoriteIds = useAppSelector(getFavorites)
  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [visibleBills, setVisibleBills] = useState(bills)
  
  useEffect(() => {
    setVisibleBills(bills.slice(
      (currentPage * rowsPerPage),
      rowsPerPage + (currentPage * rowsPerPage)
    ))
  }, [bills, currentPage, rowsPerPage])

  const handleSeeDetails = (billId: number) => {
    dispatch(selectBill(billId))
  }
  const handleAddToFavorites = (billId: number, add = true) => {
    if(add) {
      console.log(`Add to favorites: ${billId}`)
      dispatch(addFavorite(billId))
    } else {
      console.log(`Remove from favorites: ${billId}`)
      dispatch(removeFavorite(billId))
    }
  }

  const handleOnRPPChange = (rpp: number) => {
    setRowsPerPage(rpp)
    setCurrentPage(0)
  }

  return (
    <div className="table-wrapper">
      <Table
        bills={visibleBills}
        favorites={favoriteIds}
        onClickSeeDetails={handleSeeDetails}
        onClickFavorite={handleAddToFavorites}
      />
      <Pagination
        count={bills.length}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        onPageChange={(newPage: number) => setCurrentPage(newPage)}
        onRowsPerPageChange={handleOnRPPChange}
      />
    </div>
  )
}
