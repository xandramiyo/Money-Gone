// import './DailyView.css'
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
        <div>
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
                        <div>
                            <EntryForm user={user} date={currentDate} setEntries={setEntries} categories={categories} setCategories={setCategories}/>
                        </div>
                        <div>
                            <p>Total</p>
                            <p>${todayEntries.length > 0 ? dailyTotal : 0}</p>
                        </div>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Category</td>
                                    <td>Notes</td>
                                    <td>Cost</td>
                                    <td colSpan={2}></td>
                                </tr>
                            </thead>
                            {/* <tbody> */}
                                { todayEntries.length > 0 ? 
                                <tbody>
                                    {todayEntries.map((entry, index) => 
                                        <Entry entry={entry} user={user} key={index} entries={entries} setEntries={setEntries} categories={categories} setCategories={setCategories}/>
                                    )}
                                </tbody>
                                    :
                                    "Nothing spent...yet!"
                                }
                            {/* </tbody> */}
                        </table>
                    </div>
                </div>
        </div>
    )
}