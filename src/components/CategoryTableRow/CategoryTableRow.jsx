import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter } from '@mui/material';

export default function CategoryTableRow({ entry }){
	return (
		<TableRow>
			<TableCell>{entry.name}</TableCell>
			<TableCell>{new Date(entry.date).toDateString()}</TableCell>
			<TableCell>{entry.notes}</TableCell>
			<TableCell>${entry.cost}</TableCell>
		</TableRow>
	)
}