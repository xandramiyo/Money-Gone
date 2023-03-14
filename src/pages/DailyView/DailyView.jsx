import './DailyView.css'
import { useState, useEffect } from 'react'
import EntryForm from '../../components/EntryForm/EntryForm'
import Entry from '../../components/Entry/Entry'
import * as entriesAPI from '../../utilities/entries-api'

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
        <div className="flex-col daily">
                <div className="flex-row day-header">
                    <button className="day-toggle flex-row" onClick={handlePrevDay}><img src="https://i.imgur.com/42rzMBd.png" /></button>
                    <div>
                        <h1>{new Date(currentDate).toDateString()}</h1>
                        <button className="todayBtn" onClick={handleToday}>Today</button>
                    </div>
                    <button className="day-toggle" onClick={handleNextDay}><img src="https://i.imgur.com/gQVLCgp.png"/></button>
                </div>
                <div className="daily-main">
                    <div className="daily-left">
                        <div className="flex-col add-entry">
                            <EntryForm user={user} date={currentDate} setEntries={setEntries} categories={categories} setCategories={setCategories}/>
                        </div>
                        <div className="flex-row daily-total">
                            <p>Total</p>
                            <p>${todayEntries.length > 0 ? dailyTotal : 0}</p>
                        </div>
                    </div>
                    <div className="daily-right">
                        <table className="entries-table">
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
                                <tbody className="show-entries">
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