import './DailyView.css'
import {useState, useEffect} from 'react'
import EntryForm from '../../components/EntryForm/EntryForm'
import Entry from '../../components/Entry/Entry'
import * as entriesAPI from '../../utilities/entries-api'

export default function DailyView({user}) {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [entries, setEntries] = useState([])

    useEffect(function() {
        async function getEntries() {
          const entries = await entriesAPI.getAll();
          setEntries(entries);
        }
        getEntries();
      }, []);

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
    const init = 0
    let dailyTotal = total.reduce((acc, currentValue) => acc + currentValue, init)
    
    return (
        <div className="flex-col daily">
            <div className="flex-col daily-main">
                <div className="flex-row day-header">
                    <button className="day-toggle flex-row" onClick={handlePrevDay}><img src="https://www.flaticon.com/svg/vstatic/svg/3916/3916931.svg?token=exp=1678125416~hmac=b34cb50592e80544d0398740439cb1dd" /></button>
                    <div>
                        <h1>{new Date(currentDate).toDateString()}</h1>
                        <button className="todayBtn" onClick={handleToday}>Today</button>
                    </div>
                    <button className="day-toggle" onClick={handleNextDay}><img src="https://www.flaticon.com/svg/vstatic/svg/3916/3916949.svg?token=exp=1678125400~hmac=657a7d3fbac432fbc4b8543f22dd7f46"/></button>
                </div>
                <div className="flex-col add-entry">
                    <EntryForm user={user} date={currentDate} setEntries={setEntries}/>
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