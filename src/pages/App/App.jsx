import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import Spending from '../Spending/Spending';
import DailyView from '../DailyView/DailyView';
import EditEntryForm from '../../components/EditEntryForm/EditEntryForm'
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App flex-col">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<DailyView user={user}/>} />
            <Route path="/" element={<Spending user={user}/>} />
            <Route path="/edit" element={<EditEntryForm user={user}/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


