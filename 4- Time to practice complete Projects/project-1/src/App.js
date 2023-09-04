import React, { useState } from "react";
import Header from "./Components/1- Header/Header";
import Form from "./Components/2- Form/Form";
import Table from "./Components/3- Table/Table";

function App() {
  const [arrdata, setArrData] = useState("");
  const calculateHandler = (userInput) => {
    //! Should be triggered when form is submitted
    //! You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; //! per-year results

    let currentSavings = +userInput.saving; //! feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySaving; //! as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedInt / 100;
    const duration = +userInput.duration;
    //! The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        //! feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: Math.round(yearlyInterest),
        savingsEndOfYear: Math.round(currentSavings),
        yearlyContribution: yearlyContribution,
      });
    }
    setArrData(yearlyData);
    console.log(arrdata);
  };
  const inputsData = (data) => {
    calculateHandler(data);
  };

  return (
    <div>
      <Header />
      <Form data={inputsData} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table yearlyData={arrdata} />
    </div>
  );
}

export default App;
