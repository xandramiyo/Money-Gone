import './IncomeForm.css'
import { useState } from 'react'
import * as incomeAPI from  '../../utilities/income-api'

export default function IncomeForm({user, incomeEntries, setIncomeEntries}) {
	const [ formData, setFormData ] = useState({
		date: '',
		amount: '',
	})

	function handleChange(evt) {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			error: ''
		})
	}

	async function handleSubmit(evt) {
		evt.preventDefault()
        try {
            const incomeEntry = await incomeAPI.addIncome({ 
				date: formData.date, 
				amount: formData.amount,
				user: user._id,
			})
            setIncomeEntries(incomeList => [...incomeList, incomeEntry])
			setFormData({
				date: '',
				amount: '',
			})
        } catch(err) {
            console.log(err)
        }
	}

	return (
		<>
			<form className="flex-col form-container income-form-ctr" onSubmit={handleSubmit}>
				<h4>Income Tracker</h4>
				<div className="flex-row income-form">
					<input
						type="date" 
						name="date" 
						value={formData.date} 
						onChange={handleChange} 
						required 
						placeholder="Enter date"
					/>
					<input
						type="text" 
						name="amount" 
						value={formData.amount} 
						onChange={handleChange} 
						required 
						placeholder="Enter amount"
					/>
				</div>
				<button type="submit" className="income-submit">Add Income</button>
			</form>
		</>
	)
}