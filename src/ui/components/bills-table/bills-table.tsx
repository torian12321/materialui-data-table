import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import SvgIcon from '@mui/material/SvgIcon'
import DeleteIcon from '@mui/icons-material/InfoRounded'

import type { Bill } from '../../../state/slices/bill-slice'

interface Props {
  bills: Bill[]
	onClickSeeDetails?: (billId: number) => void
}

const BillsTable = ({
  bills,
  onClickSeeDetails,
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
				{bills.map((row) => (
					<TableRow
						key={row.number}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						className='table__row'
            onClick={() => onClickSeeDetails && onClickSeeDetails(row.number)}
					>
						<TableCell component="th" scope="row">
							{row.number}
						</TableCell>
						<TableCell align="right">{row.type}</TableCell>
						<TableCell align="right">{row.status}</TableCell>
						<TableCell align="right">{row.sponsor}</TableCell>
						<TableCell align="right">
							<SvgIcon component={DeleteIcon} inheritViewBox className='table__row__icon' />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>
)

export default BillsTable
