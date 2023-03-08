import './EditEntryForm.css'
import {useState} from 'react'
import * as entriesAPI from '../../utilities/entries-api'

export default function EditEntryForm({user, date, setEntries}) {
    const [editedEntry, setEditedEntry] = useState('')
	const [formData, setFormData] = useState({
		name: '',
		notes: '',
		cost: '',
		category: '',
	})
  
	function handleChange(evt) {
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			error: ''
		})
	}

	async function handleEditEntry(evt) {
        evt.preventDefault()
        try {
            const entry = await entriesAPI.editEntry({ 
				name: formData.name, 
				category: formData.category,
				cost: formData.cost,
				notes: formData.notes,
				user: user._id,
				date: date
			})
            // setEntries(todayEntries => [...todayEntries, entry])
			setFormData({
				name: '',
				notes: '',
				cost: '',
				category: '',
			})
        } catch(err) {
            console.log(err)
        }
    }

	return (
		<div className="form-container edit-form-ctr">
			<form autoComplete="off" className="entry-form" onSubmit={handleEditEntry}>
				<label>Name of entry</label>
              	<input 
					type="text" 
					name="name" 
					value={formData.name} 
					onChange={handleChange} 
					required 
					placeholder="Target"
					/>
				<label>Category</label>
				<select name="category" value={formData.category} onChange={handleChange} required>
					<option></option>
					<option>Bills</option>
					<option>Groceries</option>
					<option>Dine Out</option>
					<option>Household</option>
					<option>Misc Expenses</option>
				</select>
				<label>Cost</label>
              	<input type="text" name="cost" value={formData.cost} onChange={handleChange} required />
				<label>Notes</label>
              	<textarea 
					type="text" 
					name="notes" 
					value={formData.notes} 
					onChange={handleChange} 
					rows={2}
					placeholder="optional- add details of your expenses"
					/>
				<button type="submit">Make Changes</button>
			</form>
		</div>
	)
}