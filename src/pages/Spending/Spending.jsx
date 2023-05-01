// import './Spending.css'
import { Link } from 'react-router-dom'
import IncomeForm from '../../components/IncomeForm/IncomeForm'
import IncomeTable from '../../components/IncomeTable/IncomeTable'
import { Typography, Box, Grid, Button } from '@mui/material';

export default function Spending({ user, incomeEntries, setIncomeEntries, categories }) {

    return (
        <>
            <Box className="">
                <IncomeForm user={user} incomeEntries={incomeEntries} setIncomeEntries={setIncomeEntries}/>
                <IncomeTable user={user} incomeEntries={incomeEntries} setIncomeEntries={setIncomeEntries}/>
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Link to="/spending/income-history">
                        <Button variant="outlined">Income History</Button>
                    </Link>
                </Grid>
                {categories.map((category, index) => 
                    <Grid item xs={6}>
                        <Link to="/spending/details" state={{category: category}} key={index} >
                            <Button 
                                variant="outlined" 
                                sx={{ width: '10rem' }}>
                                    {category.name}
                            </Button>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </>
    )
}