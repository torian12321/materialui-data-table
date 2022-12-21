import TablePagination from '@mui/material/TablePagination'

interface Props {
  count?: number
  currentPage?: number
  rowsPerPage?: number
  onPageChange: (page: number) => void
  onRowsPerPageChange: (rpp: number) => void
}

const Pagination = ({
  count = 0,
  currentPage = 0,
  rowsPerPage = 5,
  onPageChange,
  onRowsPerPageChange,
}: Props) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    onPageChange(newPage)    
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRowsPerPageChange(parseInt(event.target.value, 10))
  }

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 15]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={currentPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}

export default Pagination
