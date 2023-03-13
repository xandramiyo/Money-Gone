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
            <div className="flex-col daily-main">
                <div className="flex-row day-header">
                    <button className="day-toggle flex-row" onClick={handlePrevDay}><img src="https://i.imgur.com/42rzMBd.png" /></button>
                    <div>
                        <h1>{new Date(currentDate).toDateString()}</h1>
                        <button className="todayBtn" onClick={handleToday}>Today</button>
                    </div>
                    <button className="day-toggle" onClick={handleNextDay}><img src="https://i.imgur.com/gQVLCgp.png"/></button>
                </div>
                <div className="flex-col add-entry">
                    <EntryForm user={user} date={currentDate} setEntries={setEntries} categories={categories} setCategories={setCategories}/>
                </div>
                <div className="flex-row daily-total">
                    <p>Total</p>
                    <p>${todayEntries.length > 0 ? dailyTotal : 0}</p>
                </div>
                { todayEntries.length > 0 ? 
                    <div className="flex-col show-entries">
                        {todayEntries.map((entry, index) => 
                            <Entry entry={entry} user={user} key={index} entries={entries} setEntries={setEntries}/>
                        )}
                    </div>
                        :
                        "Nothing spent...yet!"
                }
            </div>
        </div>
    )
}