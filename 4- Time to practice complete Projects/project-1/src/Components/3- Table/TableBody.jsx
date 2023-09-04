import React from "react";

const TableBody = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tbody key={props.year}>
      <tr>
        <td>{props.year}</td>
        <td>{formatter.format(props.savingsEndOfYear)}</td>
        <td>{formatter.format(props.yearlyInterest)}</td>
        <td>{formatter.format(props.totalInterest)}</td>
        <td>{formatter.format(props.totalInvested)}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
