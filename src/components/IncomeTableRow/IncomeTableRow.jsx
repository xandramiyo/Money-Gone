import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function IncomeTableRow({ income} ){
	return (
		<TableRow>
			<TableCell align="center">
				<Typography>
					{new Date(income.date).toDateString()}
				</Typography>
			</TableCell>
			<TableCell align="center">
				<Typography>${income.amount}</Typography>
			</TableCell>
		</TableRow>
	)
}