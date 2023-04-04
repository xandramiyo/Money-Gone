// import './IncomeEntry.css'
import * as incomeAPI from '../../utilities/income-api'

export default function IncomeEntry({ incomeEntry, incomeEntries, setIncomeEntries }) {

	async function handleDelete() {
		const deleteIncome = await incomeAPI.deleteIncome(incomeEntry)
		setIncomeEntries(incomeEntries.filter((income)=> income._id != deleteIncome._id))
	}

	return (
		<tr>
			<td>{new Date(incomeEntry.date).toDateString()}</td>
			<td>${incomeEntry.amount}</td>
			<td className="delete-cell">
				<button className="" onClick={handleDelete} >delete</button>
			</td>
		</tr>
	)
}