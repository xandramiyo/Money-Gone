import './Entry.css'
import * as entriesAPI from '../../utilities/entries-api'
import { Link } from 'react-router-dom'

export default function Entry({ entry, entries, setEntries, categories, setCategories }) {

	async function handleDelete() {
		const deleteEntry = await entriesAPI.deleteEntry(entry)
		setEntries(entries.filter((entry)=> entry._id != deleteEntry._id))

		let copyCategories = [...categories]
		let idx = copyCategories.findIndex((category) => category.name === deleteEntry.category.name)
		let entryIdx = copyCategories[idx].entries.findIndex((entry) => entry._id === deleteEntry._id)
		console.log(typeof copyCategories[idx].entries)
		copyCategories[idx].entries.splice(entryIdx, 1)
		setCategories(copyCategories)
}

	return (
		// <div className="flex-col entry-item">
		// 	<div className="flex-col entry-main">
		// 		<div className="category">
		// 			<p>{entry.category.name}</p>
		// 		</div>	
		// 		<div className="flex-row main-content-ctr">
		// 			<div className="flex-col main-content">
		// 				<p>Purchase</p>
		// 				<p>Cost</p>
		// 				{entry.notes ? <p>Notes</p> : null}
		// 			</div>
		// 			<div className="flex-col main-content">
		// 				<p>{entry.name}</p>
		// 				<p>${entry.cost}</p>
		// 				{entry.notes ? <p>{entry.notes}</p> : null}
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className="flex-row CRUD">
		// 		<Link to={`/edit/${entry._id}`} state={{ 
		// 			name: entry.name,
		// 			category: entry.category.name,
		// 			cost: entry.cost,
		// 			notes: entry.notes,
		// 			date: entry.date,
		// 		 }}><button>edit</button></Link>
		// 		<button onClick={handleDelete}>delete</button>
		// 	</div>
		// </div>
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


{/* <table>
	<thead>
		<tr>

		</tr>
	</thead>
	<tbody>
		<tr>
			<td>{entry.name}</td>
			<td>{entry.category}</td>
			<td>{entry.notes}</td>
			<Link to={`/edit/${entry._id}`} state={{ 
					name: entry.name,
					category: entry.category.name,
					cost: entry.cost,
					notes: entry.notes,
					date: entry.date,
			}}><button>edit</button></Link>
			<button onClick={handleDelete}>delete</button>
		</tr>
	</tbody>
</table> */}