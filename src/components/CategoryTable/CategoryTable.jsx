import './CategoryTable.css'
import CategoryTableRow from "../CategoryTableRow/CategoryTableRow"

export default function CategoryTable({category}) {
	const entries = category.entries

	let total = []
    entries.forEach(entry => total.push(entry.cost))
    let categoryTotal = total.reduce((acc, currentValue) => acc + currentValue, 0)

	return (
		<>
			<table className="income-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Date</th>
						<th>Notes</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{entries.map((entry, index) => 
						<CategoryTableRow entry={entry} key={index}/>
					)}
				</tbody>
				<tfoot>
					<tr>
						<th colSpan="2">Total</th>
						<th colSpan="2" className="cat-total">${categoryTotal}</th>
					</tr>
				</tfoot>
			</table>
		</>
	)
}