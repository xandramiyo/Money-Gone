import './Entry.css'
import * as entriesAPI from '../../utilities/entries-api'
import { Link } from 'react-router-dom'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Typography, Button } from '@mui/material';


export default function Entry({ entry, entries, setEntries, categories, setCategories }) {

	async function handleDelete() {
		const deleteEntry = await entriesAPI.deleteEntry(entry)
		setEntries(entries.filter((entry)=> entry._id != deleteEntry._id))

		let copyCategories = [...categories]
		let idx = copyCategories.findIndex((category) => category.name === deleteEntry.category.name)
		let entryIdx = copyCategories[idx].entries.findIndex((entry) => entry._id === deleteEntry._id)
		copyCategories[idx].entries.splice(entryIdx, 1)
		setCategories(copyCategories)
	}

	return (
		<TableRow
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			>
				<TableCell align="center">{entry.name}</TableCell>
				<TableCell align="center">{entry.category.name}</TableCell>
				<TableCell align="center">{entry.notes}</TableCell>
				<TableCell align="center">${entry.cost}</TableCell>
				<TableCell align="center">
					<Link to={`/edit/${entry._id}`} state={{ 
					name: entry.name,
					category: entry.category.name,
					cost: entry.cost,
					notes: entry.notes,
					date: entry.date,
					}}>
						<Button className="CRUD-btn">
							<Typography>edit</Typography>
						</Button>
					</Link>
						<Button onClick={handleDelete} className="CRUD-btn">
							<Typography>delete</Typography>
						</Button>
				</TableCell>
        </TableRow>
	)
}