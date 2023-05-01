import IncomeTableRow from '../IncomeTableRow/IncomeTableRow'
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function IncomeTable({ incomeEntries }) {
	let recentFour = incomeEntries.slice(Math.max(incomeEntries.length -4, 0))

	return (
		<Table className="">
			<TableHead>
				<TableRow>
					<TableCell align="center">
						<Typography>Date</Typography>
					</TableCell>
					<TableCell align="center">
						<Typography>Amount</Typography>
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{recentFour.map((income, index) => 
					<IncomeTableRow income={income} key={index}/>
				)}
			</TableBody>
		</Table>
	)
}