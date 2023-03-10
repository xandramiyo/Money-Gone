import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import Spending from '../Spending/Spending';
import DailyView from '../DailyView/DailyView';
import EditEntryForm from '../../components/EditEntryForm/EditEntryForm'
import NavBar from '../../components/NavBar/NavBar'
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import IncomeHistory from '../IncomeHistory/IncomeHistory'
import * as incomeAPI from '../../utilities/income-api'
import * as categoriesAPI from '../../utilities/categories-api'

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [ incomeEntries, setIncomeEntries ] = useState([])
  const [ categories, setCategories ] = useState([])

  useEffect(function() {
    async function getCategories() {
      const categories = await categoriesAPI.getAll();
      setCategories(categories);
    }
    getCategories();
  }, []);

  useEffect(function() {
      async function getIncomeEntries() {
        const incomeEntries = await incomeAPI.getAll();
        setIncomeEntries(incomeEntries);
      }
      getIncomeEntries();
    }, []);

  return (
    <main className="App flex-col">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<DailyView user={user} categories={categories} setCategories={setCategories} />} />
            <Route path="/spending" element={<Spending user={user} incomeEntries={incomeEntries} setIncomeEntries={setIncomeEntries}/>} />
            <Route path="/edit/:entryId" element={<EditEntryForm user={user} categories={categories} setCategories={setCategories} />}/>
            <Route path="/spending/bills" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/groceries" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/dine-out" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/household" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/misc" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/savings" element={<CategoryDetails user={user}/>}/>
            <Route path="/spending/income-history" element={<IncomeHistory user={user} incomeEntries={incomeEntries} setIncomeEntries={setIncomeEntries}/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


