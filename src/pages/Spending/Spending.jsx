import './Spending.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import IncomeForm from '../../components/IncomeForm/IncomeForm'
import IncomeTable from '../../components/IncomeTable/IncomeTable'

export default function Spending({ user, incomeEntries, setIncomeEntries }) {

    return (
        <>
            <div className="flex-col income-ctr">
                <IncomeForm user={user} incomeEntries={incomeEntries} setIncomeEntries={setIncomeEntries}/>
                <IncomeTable user={user} incomeEntries={incomeEntries} setIncomeEntries={setIncomeEntries}/>
            </div>
            <div className="cat-ctr">
                <Link to="/spending/income-history">
                    <div className="category-div">Income History</div>
                </Link>
                <Link to="/spending/bills">
                    <div className="category-div">Bills</div>
                </Link>
                <Link to="/spending/groceries">
                    <div className="category-div">Groceries</div>
                </Link>
                <Link to="/spending/dine_out">
                    <div className="category-div">Dine Out</div>
                </Link>
                <Link to="/spending/household">
                    <div className="category-div">Household</div>
                </Link>
                <Link to="/spending/misc">
                    <div className="category-div">Misc. Spending</div>
                </Link>
                <Link to="/spending/savings">
                    <div className="category-div">Savings</div>
                </Link>
            </div>
        </>
    )
}