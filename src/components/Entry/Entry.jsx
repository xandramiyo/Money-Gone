// import './Entry.css'
import * as entriesAPI from '../../utilities/entries-api'
import { Link } from 'react-router-dom'

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
		<tr>
			<td>{entry.name}</td>
			<td>{entry.category.name}</td>
			<td className="wrap">{entry.notes}</td>
			<td>${entry.cost}</td>
			<td className="CRUD">
				<Link to={`/edit/${entry._id}`} state={{ 
						name: entry.name,
						category: entry.category.name,
						cost: entry.cost,
						notes: entry.notes,
						date: entry.date,
				}}><button>edit</button></Link>
			</td>
			<td className="CRUD">
				<button onClick={handleDelete}>delete</button>
			</td>
		</tr>
	)
}