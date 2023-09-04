import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Styles from "./Table.module.css";
const Table = (props) => {
  let content = "No investment Calculated yet.";

  if (props.arrayData.length > 0) {
    content = (
      <table className={Styles.result}>
        <TableHead />
        {props.arrayData.map((data) => (
          <TableBody
            year={data.year}
            savingsEndOfYear={data.savingsEndOfYear}
            yearlyInterest={data.yearlyInterest}
            totalInterest={data.totalInterestGain}
            totalInvested={data.investedCapital}
          />
        ))}
      </table>
    );
  }
  return <div style={{ textAlign: "center" }}>{content}</div>;
};

export default Table;
