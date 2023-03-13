import IncomeEntry from '../../components/IncomeEntry/IncomeEntry'

export default function IncomeHistory({ incomeEntries, setIncomeEntries }){

	let sortIncomes = incomeEntries.sort(function(a,b) {
		return new Date(b.date) - new Date(a.date)
	})

	return (
		<>
			<h2>Income History</h2>
			<table className="table">
				<thead>
					<tr>
						<th>Date</th>
						<th>Amount</th>
						<th className="delete-income"></th>
					</tr>
				</thead>
				<tbody>
					{sortIncomes.map((incomeEntry, index) => 
						<IncomeEntry 
							incomeEntry={incomeEntry} 
							key={index} 
							incomeEntries={incomeEntries}
							setIncomeEntries={setIncomeEntries}
						/>
					)}
				</tbody>
			</table>
		</>
	)
}