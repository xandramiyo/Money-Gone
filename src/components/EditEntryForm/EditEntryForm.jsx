// import './EditEntryForm.css'
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import * as entriesAPI from '../../utilities/entries-api'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function EditEntryForm({ user, categories, setCategories, entries, setEntries }) {
	const location = useLocation()
	const { name, category, cost, notes, date } = location.state
	const {entryId} = useParams()
	const navigate = useNavigate()

	const [formData, setFormData] = useState({
		name: name,
		category: category,
		cost: cost,
		notes: notes,
		date: date
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
            const updatedEntry = await entriesAPI.editEntry(entryId, { 
				name: formData.name, 
				category: formData.category,
				cost: formData.cost,
				notes: formData.notes,
				user: user._id,
			})
			const filteredEntries = entries.filter((entry) => entry.id !== updatedEntry.id)
			filteredEntries.push(updatedEntry)
			setEntries(filteredEntries)

			let copyCategories = [...categories]
			console.log('copy 1', copyCategories)
			let idx = copyCategories.findIndex((category) => category.name === updatedEntry.category.name)
			console.log('idx', idx)
			let entryIdx = copyCategories[idx].entries.findIndex((entry) => entry._id === updatedEntry._id)
			console.log('entryIdx', entryIdx)
			copyCategories[idx].entries.splice(entryIdx, 1, updatedEntry)
			console.log('copy 2', copyCategories)
			// make an if statement and add logic for if category changes- above logic is only valid if category stays the same
			setCategories(copyCategories)

            navigate('/')
        } catch(err) {
            console.log(err)
        }
    }

	return (

		<Box component="form" noValidate onSubmit={handleEditEntry} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
					label="Name of Entry"
					variant="outlined"
					type="text" 
					name="name" 
					onChange={handleChange} 
					value={formData.name} 
					required 
					fullWidth
					/>
                </Grid>
                <Grid item xs={12}>
                <FormControl fullWidth>
					<InputLabel id="category">Category</InputLabel>
					<Select
						labelId='category'
						label="Category"
						id="category"
						name="category"
						value={formData.category}
						onChange={handleChange}
						align="left"
						fullWidth
						required
						>
						{categories.map((category, index) => 
							<MenuItem 
							value={category._id} 
							label="Category"
							key={index}
							>
							{category.name}
							</MenuItem>
						)}
					</Select>
				</FormControl>
              </Grid>
              <Grid item xs={12}>
			  	<TextField
					label="Cost"
					variant="outlined"
					type="text" 
					name="cost" 
					onChange={handleChange} 
					value={formData.cost} 
					required 
					fullWidth
				/>
              </Grid>
              <Grid item xs={12}>
			  <TextField
					label="Notes"
					variant="outlined"
					type="text" 
					name="notes" 
					onChange={handleChange} 
					value={formData.notes} 
					multiline
					rows={3}
					fullWidth
				/>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'primary.light' }}
            >
              Make Changes
            </Button>
          </Box>
	)
}

// <div className="form-container edit-form-ctr">
// 	<form autoComplete="off" className="" onSubmit={handleEditEntry}>
// 		<label>Name of entry</label>
// 		<input 
// 			type="text" 
// 			name="name" 
// 			value={formData.name} 
// 			onChange={handleChange} 
// 			required 
// 			placeholder="Target"
// 			/>
// 		<label>Category</label>
// 		<select name="category" value={formData.category} onChange={handleChange} required>
// 			<option></option>
// 			{categories.map((category, index) => 
// 				<CategoryOption category={category} key={index} />
// 			)}
// 		</select>
// 		<label>Cost</label>
// 		<input type="text" name="cost" value={formData.cost} onChange={handleChange} required />
// 		<label>Notes</label>
// 		<textarea 
// 			type="text" 
// 			name="notes" 
// 			value={formData.notes} 
// 			onChange={handleChange} 
// 			rows={2}
// 			placeholder="optional- add details of your expenses"
// 			/>
// 		<button type="submit">Make Changes</button>
// 	</form>
// </div>