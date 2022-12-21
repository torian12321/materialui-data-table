import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import SvgIcon from '@mui/material/SvgIcon'
import DeleteIcon from '@mui/icons-material/InfoRounded'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'

import type { Bill } from '../../../state/slices/bill-slice'
import type { BillId } from '../../../types/legislations'

interface Props {
  bills: Bill[]
  favorites?: BillId[]
	onClickSeeDetails: (billId: number) => void
  onClickFavorite: (billId: number, add?: boolean) => void
}

const BillsTable = ({
  bills,
  favorites = [],
  onClickSeeDetails,
  onClickFavorite,
}: Props) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="bills table">
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell align="right">Type</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Sponsor</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {bills.map((bill) => {
          const isFavorite = Boolean(favorites.includes(bill.number))

          return (
            <TableRow
              key={bill.number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='table__row'
            >
              <TableCell component="th" scope="row">
                {bill.number}
              </TableCell>
              <TableCell align="right">{bill.type}</TableCell>
              <TableCell align="right">{bill.status}</TableCell>
              <TableCell align="right">{bill.sponsor}</TableCell>
              <TableCell align="right">
                <SvgIcon
                  inheritViewBox
                  component={DeleteIcon}
                  className='table__row__icon'
                  onClick={() => onClickSeeDetails(bill.number)}
                />
                {isFavorite ?
                  <SvgIcon
                    inheritViewBox
                    component={Favorite}
                    className='table__row__icon'
                    onClick={() => onClickFavorite(bill.number, false)}
                  /> :
                  <SvgIcon
                    inheritViewBox
                    component={FavoriteBorder}
                    className='table__row__icon'
                    onClick={() => onClickFavorite(bill.number, true)}
                  />
                }
              </TableCell>
            </TableRow>
          )})}
      </TableBody>
    </Table>
  </TableContainer>
)

export default BillsTable
