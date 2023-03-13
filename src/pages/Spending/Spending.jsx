import './Spending.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import IncomeForm from '../../components/IncomeForm/IncomeForm'
import IncomeTable from '../../components/IncomeTable/IncomeTable'
import CategoryDetails from '../CategoryDetails/CategoryDetails'

export default function Spending({ user, incomeEntries, setIncomeEntries, categories, setCategories}) {
    console.log(categories)

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
                {categories.map((category, index) => 
                    <Link to="/spending/details" state={{category: category}}>
                        <div className="category-div">{category.name}</div>
                    </Link>
                )}
            </div>
        </>
    )
}