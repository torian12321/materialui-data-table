import TablePagination from '@mui/material/TablePagination'

interface Props {
  count?: number
  currentPage?: number
  rowsPerPage?: number
  onRowsPerPageChange: (rpp: number) => void
}

const Pagination = ({
  count = 0,
  currentPage = 0,
  rowsPerPage = 5,
  onRowsPerPageChange,
}: Props) => {
  const handleChangePage = () => {
    
  }
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRowsPerPageChange(parseInt(event.target.value, 10))
  }

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
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
