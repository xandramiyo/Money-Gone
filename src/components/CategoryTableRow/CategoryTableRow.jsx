export default function CategoryTableRow({ entry }){
	return (
		<tr>
			<td>{entry.name}</td>
			<td>{new Date(entry.date).toDateString()}</td>
			<td>{entry.notes}</td>
			<td>${entry.cost}</td>
		</tr>
	)
}