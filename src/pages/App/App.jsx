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
import * as entriesAPI from '../../utilities/entries-api'
import * as incomeAPI from '../../utilities/income-api'
import * as categoriesAPI from '../../utilities/categories-api'

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [ incomeEntries, setIncomeEntries ] = useState([])
  const [ categories, setCategories ] = useState([])
  const [ entries, setEntries ] = useState([])

  useEffect(function() {
    async function getEntries() {
      const entries = await entriesAPI.getAll();
      setEntries(entries);
    }
    getEntries();
  }, []);

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
            <Route path="/" element={<DailyView user={user} entries={entries} setEntries={setEntries} categories={categories} setCategories={setCategories} />} />
            <Route path="/spending" element={<Spending user={user} incomeEntries={incomeEntries} setIncomeEntries={setIncomeEntries} categories={categories} setCategories={setCategories}/>} />
            <Route path="/edit/:entryId" element={<EditEntryForm user={user} categories={categories} setCategories={setCategories} entries={entries} setEntries={setEntries}/>}/>
            <Route path="/spending/income-history" element={<IncomeHistory user={user} incomeEntries={incomeEntries} setIncomeEntries={setIncomeEntries}/>}/>
            <Route path="/spending/details" element={<CategoryDetails user={user} categories={categories} setCategories={setCategories}/>}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


