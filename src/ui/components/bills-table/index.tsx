import { useAppDispatch, useAppSelector } from '../../../state/hooks'
import { getAllBills } from '../../../state/selectors/bill-selectors'
import { selectBill, setRowsPerPage } from '../../../state/slices/options-slice'
import { getRowsPerPage } from '../../../state/selectors/options-selectors'

import Table from './bills-table'
import Pagination from './bills-table-pagination'

export const BillsTable = () => {
  const dispatch = useAppDispatch()
  const bills = useAppSelector(getAllBills)
  const rowsPerPage = useAppSelector(getRowsPerPage)

  const handleSeeDetails = (billId: number) => {
    dispatch(selectBill(billId))
  }
  const handleOnChangeRowsPerPage = (rpp: number) => {
    dispatch(setRowsPerPage(rpp))
  }

  return (
    <div>
      <Table
        bills={bills}
        onClickSeeDetails={handleSeeDetails}
      />
      <Pagination
        count={bills.length}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleOnChangeRowsPerPage}
      />
    </div>
  )
}
