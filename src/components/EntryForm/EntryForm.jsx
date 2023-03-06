import './EntryForm.css'
import {useState} from 'react'

export default function EntryForm() {
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

	return (
		<div className="form-container">
			<form autoComplete="off" className="entry-form">
				<label>Name of entry</label>
              	<input 
					type="text" 
					name="name" 
					value={formData.name} 
					onChange={handleChange} 
					required 
					placeholder="Tastea boba"
					/>
				<label>Cost</label>
              	<input type="text" name="cost" value={formData.cost} onChange={handleChange} required />
				<label>Notes</label>
              	<textarea 
					type="text" 
					name="notes" 
					value={formData.notes} 
					onChange={handleChange} 
					rows={4}
					placeholder="add the list of items purchased or make a note of the thing you bought (ex: not worth, dont come here again)"
					/>
				<button type="submit">Add</button>
			</form>
		</div>
	)
}