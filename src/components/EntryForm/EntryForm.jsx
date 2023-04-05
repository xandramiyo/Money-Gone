import './EntryForm.css'
import * as React from 'react';
import { useState } from 'react'
import * as entriesAPI from '../../utilities/entries-api'
import CategoryOption from '../CategoryOption/CategoryOption'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function EntryForm({ user, date, setEntries, categories, setCategories }) {

	const [formData, setFormData] = useState({
		name: '',
		notes: '',
		cost: '',
		category: '',
	})
  
	function handleChange(evt) {
		console.log(evt.target.value)
		setFormData({
			...formData,
			[evt.target.name]: evt.target.value,
			error: ''
		})
	}

	async function handleAddEntry(evt) {
        evt.preventDefault()
        try {
            const entry = await entriesAPI.createEntry({ 
				name: formData.name, 
				category: formData.category,
				cost: formData.cost,
				notes: formData.notes,
				user: user._id,
				date: date
			})
            setEntries(todayEntries => [...todayEntries, entry])
			
			let copyCategories = [...categories]
			let idx = copyCategories.findIndex((category) => category.name === entry.category.name)
			copyCategories[idx].entries.push(entry)
			setCategories(copyCategories)

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

		<Box component="form" noValidate onSubmit={handleAddEntry} sx={{ mt: 3 }}>
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
							value={category.name} 
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
			  color="error"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>




		// <Grid className="entry-form-ctr" container spacing={1}>
		// 	<form autoComplete="off" className="entry-form" onSubmit={handleAddEntry} noValidate>
		// 		<Grid item className="m-2">
		// 			<TextField
		// 				label="Name of Entry"
		// 				variant="outlined"
		// 				type="text" 
		// 				name="name" 
		// 				onChange={handleChange} 
		// 				value={formData.name} 
		// 				required 
		// 				fullWidth
		// 			/>
		// 		</Grid>
		// 		<Grid item className="m-2">
		// 			<FormControl fullWidth>
		// 				<InputLabel id="category">Category</InputLabel>
		// 				<Select
		// 					id="category"
		// 					value={formData.category}
		// 					labelId='category'
		// 					label="Category"
		// 					onChange={handleChange}
		// 					fullWidth
		// 					required
		// 					>
		// 					{categories.map((category, index) => 
		// 						<CategoryOption category={category} key={index} />
		// 					)}
		// 				</Select>
		// 			</FormControl>
		// 		</Grid>
		// 		<Grid item className="m-2">
		// 			<TextField
		// 				label="Cost"
		// 				variant="outlined"
		// 				type="text" 
		// 				name="cost" 
		// 				onChange={handleChange} 
		// 				value={formData.cost} 
		// 				required 
		// 				fullWidth
		// 			/>
		// 		</Grid>
		// 		<Grid item className="m-2">
		// 			<TextField
		// 				label="Notes"
		// 				variant="outlined"
		// 				type="text" 
		// 				name="name" 
		// 				onChange={handleChange} 
		// 				value={formData.notes} 
		// 				multiline
		// 				rows={3}
		// 				fullWidth
		// 			/>
		// 		</Grid>
		// 		<Grid item className="m-2">
		// 			<Button 
		// 				type="submit" 
		// 				variant="contained" 
		// 				color="error" 
		// 				size="small"
		// 				fullWidth
		// 			>
		// 				Add
		// 			</Button>
		// 		</Grid>
		// 	</form>
		// </Grid>
	)
}