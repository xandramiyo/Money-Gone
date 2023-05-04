import * as incomeAPI from '../../utilities/income-api'
import { Box, Typography, TableCell, TableRow, Button } from '@mui/material';


export default function IncomeEntry({ incomeEntry, incomeEntries, setIncomeEntries }) {

	async function handleDelete() {
		const deleteIncome = await incomeAPI.deleteIncome(incomeEntry)
		setIncomeEntries(incomeEntries.filter((income)=> income._id != deleteIncome._id))
	}

	return (
		<TableRow>
			<TableCell>{new Date(incomeEntry.date).toDateString()}</TableCell>
			<TableCell>${incomeEntry.amount}</TableCell>
			<TableCell>
				<Button onClick={handleDelete} >delete</Button>
			</TableCell>
		</TableRow>
	)
}