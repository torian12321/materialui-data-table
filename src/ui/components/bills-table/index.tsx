import Table from './bills-table'
import Pagination from './bills-table-pagination'

import type { Bill } from '../../../state/slices/bill-slice'

interface Props {
  bills: Bill[]
  onClickSeeDetails?: (billId: number) => void
}

export const BillsTable = ({ bills, onClickSeeDetails }: Props) => {
  return (
    <div>
      <Table
        bills={bills}
        onClickSeeDetails={onClickSeeDetails}
      />
      <Pagination count={bills.length} />
    </div>
  )
}
