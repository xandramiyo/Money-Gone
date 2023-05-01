import { useState } from 'react'
import * as incomeAPI from  '../../utilities/income-api'
import { Box, Typography, Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function IncomeForm({user, incomeEntries, setIncomeEntries}) {
	const [ formData, setFormData ] = useState({
		date: '',
		amount: '',
	})

	function handleChange(evt) {
		console.log(evt.target.value)
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
			<Box 
				component="form" 
				noValidate 
				onSubmit={handleSubmit} 
				sx={{ 
					margin: '.5rem',
					padding: "1rem", 
				}}
			>
				<Typography variant="h5" sx={{mt: ".2rem"}}>Income Tracker</Typography>
				<Box>
					<LocalizationProvider dateAdapter={AdapterDayjs}
					value={formData.date} >
						<DatePicker
							type="date" 
							name="date" 
							value={formData.date} 
							onChange={handleChange} 
							required 
							label="Enter date"
							inputFormat="MM/dd/yyyy"
							views={["day", "month", "year"]}
							sx={{margin: '1rem', width: '12rem'}}
						/>
					</LocalizationProvider>
					<TextField 
						type="text" 
						name="amount" 
						value={formData.amount} 
						onChange={handleChange} 
						required 
						placeholder="Enter amount"
						sx={{margin: '1rem'}}
					/>
				</Box>
				<Button type="submit" variant="outlined">Add Income</Button>
			</Box>
		</>
	)
}