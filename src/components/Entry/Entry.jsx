export default function Entry({entry}) {
	return (
		<>
			<p>{entry.name}</p>
			<p>{entry.category}</p>
			<p>{entry.cost}</p>
			<p>{entry.notes}</p>
		</>
	)
}