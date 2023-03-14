import './Spending.css'
import { Link } from 'react-router-dom'
import IncomeForm from '../../components/IncomeForm/IncomeForm'
import IncomeTable from '../../components/IncomeTable/IncomeTable'

export default function Spending({ user, incomeEntries, setIncomeEntries, categories }) {

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