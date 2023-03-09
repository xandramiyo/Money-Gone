import './IncomeHistory.css'
import { useState, useEffect } from 'react'
import * as incomeAPI from '../../utilities/income-api'
import IncomeEntry from '../../components/IncomeEntry/IncomeEntry'

export default function IncomeHistory({  }){

	// useEffect(function() {
    //     async function getIncomeEntries() {
    //       const incomeEntries = await incomeAPI.getAll();
    //       setIncomeEntries(incomeEntries);
    //     }
    //     getIncomeEntries();
    //   }, []);

	return (
		<>
			{/* {incomeEntries.map((entry, index) => 
				<IncomeEntry user={user} key={index} />
			)} */}
		</>
	)
}