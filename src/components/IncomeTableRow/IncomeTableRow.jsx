export default function IncomeTableRow({ income} ){
	return (
		<tr>
			<td>{new Date(income.date).toDateString()}</td>
			<td>${income.amount}</td>
		</tr>
	)
}