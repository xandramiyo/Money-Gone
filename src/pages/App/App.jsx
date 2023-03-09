import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import Spending from '../Spending/Spending';
import DailyView from '../DailyView/DailyView';
import EditEntryForm from '../../components/EditEntryForm/EditEntryForm'
import NavBar from '../../components/NavBar/NavBar'
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import IncomeHistory from '../IncomeHistory/IncomeHistory'

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
            <Route path="/spending" element={<Spending user={user}/>} />
            <Route path="/edit/:entryId" element={<EditEntryForm user={user}/>}/>
            <Route path="/spending/bills" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/groceries" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/dine-out" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/household" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/misc" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/savings" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/income-history" element={<IncomeHistory user={user}/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


