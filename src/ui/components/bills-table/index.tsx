import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { getAllBills } from '../../../state/selectors/bill-selectors'
import { selectBill } from '../../../state/slices/options-slice'

import Table from './bills-table'
import Pagination from './bills-table-pagination'

export const BillsTable = () => {
  const dispatch = useAppDispatch()
  const bills = useAppSelector(getAllBills)
  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
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

  return (
    <div>
      <Table
        bills={visibleBills}
        onClickSeeDetails={handleSeeDetails}
      />
      <Pagination
        count={bills.length}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        onPageChange={(newPage: number) => setCurrentPage(newPage)}
        onRowsPerPageChange={(newPage: number) => setRowsPerPage(newPage)}
      />
    </div>
  )
}