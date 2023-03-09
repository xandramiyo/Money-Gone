import './IncomeTable.css'
import IncomeTableRow from '../IncomeTableRow/IncomeTableRow'

export default function IncomeTable({ incomeEntries }) {
	let recentFour = incomeEntries.slice(Math.max(incomeEntries.length -4, 0))

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
					{recentFour.map((income, index) => 
						<IncomeTableRow income={income} key={index}/>
					)}
				</tbody>
			</table>
		</>
	)
}