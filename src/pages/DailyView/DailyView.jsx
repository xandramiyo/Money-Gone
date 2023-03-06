import './DailyView.css'
import {useState} from 'react'
import EntryForm from '../../components/EntryForm/EntryForm'

export default function DailyView() {
    const dayStr = document.querySelector('h1')
    let today = new Date()

    async function handlePrevDay(evt) {
        let prev = today.setDate(today.getDate() - 1)
        let prevDay = new Date(prev).toDateString()
        dayStr.innerHTML = prevDay
    }

    async function handleNextDay(evt) {
        let next = today.setDate(today.getDate() + 1)
        let nextDay = new Date(next).toDateString()
        dayStr.innerHTML = nextDay
    }

    async function handleToday(evt) {
        let currentDay = new Date().toDateString()
        dayStr.innerHTML = currentDay
    }

    return (
        <>
            <div className="flex-row day-header">
                <button className="day-toggle flex-row" onClick={handlePrevDay}><img src="https://www.flaticon.com/svg/vstatic/svg/3916/3916931.svg?token=exp=1678125416~hmac=b34cb50592e80544d0398740439cb1dd" /></button>
                <div>
                    <h1>{new Date(Date()).toDateString()}</h1>
                    <button className="todayBtn" onClick={handleToday}>Today</button>
                </div>
                <button className="day-toggle" onClick={handleNextDay}><img src="https://www.flaticon.com/svg/vstatic/svg/3916/3916949.svg?token=exp=1678125400~hmac=657a7d3fbac432fbc4b8543f22dd7f46"/></button>
            </div>
            <div className="flex-col add-entry">
                <EntryForm />
            </div>
        </>
    )
}