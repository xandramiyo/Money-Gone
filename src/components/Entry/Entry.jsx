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
				<div className="category">
					<p>{entry.category.name}</p>
				</div>	
				<div className="flex-row">
					<div classNmae="flex-col main-content">
						<p>Purchase:</p>
						<p>Cost:</p>
						{entry.notes ? <p>Notes:</p> : null}
					</div>
					<div className="flex-col main-content">
						<p>{entry.name}</p>
						<p>${entry.cost}</p>
						{entry.notes ? <p>{entry.notes}</p> : null}
					</div>
				</div>
			</div>
			<div className="flex-row CRUD">
				<Link to={`/edit/${entry._id}`} state={{ 
					name: entry.name,
					category: entry.category.name,
					cost: entry.cost,
					notes: entry.notes,
					date: entry.date,
				 }}><button>edit</button></Link>
				<button onClick={handleDelete}>delete</button>
			</div>
		</div>
	)
}