import Header from "./Component/Header.jsx"
import { useState } from "react";
import Userinput from "./Component/Userinput.jsx"
import Results from "./Component/Results.jsx";

function App() {
  const [userInput, setuserInput]=useState({
    initialInvestment :1000,
    annualInvestment :1200,
    expectedReturn: 6,
    duration : 10,
});


function handleChange(inputIdentifier,newValue){
    setuserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [inputIdentifier] : +newValue
        };
    });
}
  return (
    <>
    <Header/>
    <Userinput userinput ={userInput} onChange={handleChange}/>
    <Results input ={userInput}/>
    </>

  )
}

export default App
