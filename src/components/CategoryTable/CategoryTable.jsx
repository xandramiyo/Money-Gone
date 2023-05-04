// import './CategoryTable.css'
import CategoryTableRow from "../CategoryTableRow/CategoryTableRow"
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter } from '@mui/material';

export default function CategoryTable({category}) {
	const entries = category.entries

	let total = []
    entries.forEach(entry => total.push(entry.cost))
    let categoryTotal = total.reduce((acc, currentValue) => acc + currentValue, 0)

	return (
		<>
			<Table className="">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Date</TableCell>
						<TableCell>Notes</TableCell>
						<TableCell>Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{entries.map((entry, index) => 
						<CategoryTableRow entry={entry} key={index}/>
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan="2">Total</TableCell>
						<TableCell colSpan="2" className="">${categoryTotal}</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</>
	)
}