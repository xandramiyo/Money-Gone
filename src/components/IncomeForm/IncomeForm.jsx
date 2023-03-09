import './IncomeForm.css'
import { useState } from 'react'

export default function IncomeForm({user}) {
	const [ incomeEntry, setIncomeEntry ] = useState('')
	const [ formData, setFormData ] = useState({
		date: '',
		amount: ''
	})

	function handleChange(evt) {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			error: ''
		})
	}

	return (
		<>
			<form className="flex-col form-container income-form-ctr">
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