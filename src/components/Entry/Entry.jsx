import './Entry.css'
import * as entriesAPI from '../../utilities/entries-api'
import { Link } from 'react-router-dom'

export default function Entry({ entry, entries, setEntries }) {

	async function handleDelete() {
		const deleteEntry = await entriesAPI.deleteEntry(entry)
		setEntries(entries.filter((entry)=> entry._id != deleteEntry._id))
	}

	return (
		<div className="flex-col entry-item">
			<div className="flex-col entry-main">	
				<p className="category">{entry.category}</p>
				<p>{entry.name}</p>
				<p>${entry.cost}</p>
				{entry.notes ? <p>{entry.notes}</p> : null}
			</div>
			<div className="flex-row CRUD">
				<Link to={`/edit/${entry._id}`} state={{ 
					name: entry.name,
					category: entry.category,
					cost: entry.cost,
					notes: entry.notes,
					date: entry.date,
				 }}><button>edit</button></Link>
				<button onClick={handleDelete}>delete</button>
			</div>
		</div>
	)
}