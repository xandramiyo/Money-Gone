import './DailyView.css'
import { useState, useEffect } from 'react'
import EntryForm from '../../components/EntryForm/EntryForm'
import Entry from '../../components/Entry/Entry'
import * as entriesAPI from '../../utilities/entries-api'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DailyView({ user, categories, setCategories, entries, setEntries }) {
    const [currentDate, setCurrentDate] = useState(new Date())

    async function handlePrevDay(evt) {
        let prevDay = new Date(currentDate.setDate(currentDate.getDate() - 1))
        setCurrentDate(prevDay)
    }

    async function handleNextDay(evt) {
        let nextDay = new Date(currentDate.setDate(currentDate.getDate() + 1))
        setCurrentDate(nextDay)
    }

    async function handleToday(evt) {
        let currentDay = new Date()
        setCurrentDate(currentDay)
    }

    let todayEntries = entries.filter(entry => new Date(entry.date).toDateString() === new Date(currentDate).toDateString() )

    let total = []
    todayEntries.forEach(entry => total.push(entry.cost))
    let dailyTotal = total.reduce((acc, currentValue) => acc + currentValue, 0)
    
    return (
        <>
            <Box>
                <Box className="flex-col m-5 p-5">
                    <Typography
                        variant="h4"
                        component="h1"
                    >
                        {new Date(currentDate).toDateString()}
                    </Typography>
                </Box>
                <Box className="flex center m-5">
                    <IconButton onClick={handlePrevDay}><ArrowBackIcon /></IconButton>
                    <Button onClick={handleToday} variant="outlined" size="small" >Today</Button>
                    <IconButton onClick={handleNextDay}><ArrowForwardIcon/></IconButton>
                </Box>
            </Box>
            <div>
                <div>
                    <EntryForm user={user} date={currentDate} setEntries={setEntries} categories={categories} setCategories={setCategories}/>
                </div>
                <Box className="flex total">
                    <Typography variant="h6">Total</Typography>
                    <Typography variant="h6">${todayEntries.length > 0 ? dailyTotal : 0}</Typography>
                </Box>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" variant="h5">Purchase</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Notes</TableCell>
                            <TableCell align="center">Cost</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {todayEntries.map((entry, index) => 
                        <Entry entry={entry} user={user} key={index} entries={entries} setEntries={setEntries} categories={categories} setCategories={setCategories}/>
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}