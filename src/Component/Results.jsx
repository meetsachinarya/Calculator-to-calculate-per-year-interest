import React from 'react'
import {calculateInvestmentResults} from '../util/investment'

function Results({input}) {
    const resultsData =calculateInvestmentResults(input);
    console.log(resultsData)
    
  return <table id ="result">

 <thead>
     <tr>
         <th>Year</th>
         <th>Investment value</th>
         <th>Interest (Year)</th>
         <th>Total Interest</th>
         <th>Invested Capital</th>
     </tr>
  </thead>
     <tbody>
        {resultsData.map(yearData =>{
            // const totalInterest =yearData.valueEndOfYear-annualInvestement*yearData.year
            return <tr key ={yearData.year}>
                <td>{yearData.valueEndOfYear}</td>
                <td>{yearData.interest}</td>
                {/* <td>{yearData.totalInterest}</td> */}
                <td>{yearData.year}</td>
                <td>{yearData.interest}</td>
                <td>{yearData.annualInvestment}</td>
            </tr>
        })}
    
    </tbody>
  </table>
  
    
  
}

export default Results
