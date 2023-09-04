import React, { useState } from "react";
import Header from "./Components/1- Header/Header";
import Form from "./Components/2- Form/Form";
import Table from "./Components/3- Table/Table";

function App() {
  const [arrdata, setArrData] = useState([]);

  const calculateHandler = (userInput) => {
    //! Main Logic for Calculating
    const yearlyData = [];
    let currentSavings = +userInput.currSaving;
    const yearlyContribution = +userInput.yrSaving;
    const expectedReturn = +userInput.expIntYr / 100;
    let totalInterest = 0;

    for (let i = 0; i < +userInput.duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterestGain: totalInterest,
        investedCapital: currentSavings - totalInterest,
      });
    }
    setArrData(yearlyData);
  };
  // !if Calling Submit click
  const inputsData = (data) => {
    calculateHandler(data);
  };
  //! Reseting List
  const resetingList = () => {
    setArrData([]);
  };
  return (
    <div>
      <Header />
      <Form data={inputsData} reset={resetingList} />
      <Table arrayData={arrdata} />
    </div>
  );
}

export default App;
