import './IncomeTable.css'

export default function IncomeTable() {
	return (
		<>
			<table className="income-table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>3/9/23</td>
						<td>$100</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}