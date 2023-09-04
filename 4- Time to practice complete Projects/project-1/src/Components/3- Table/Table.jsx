import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Styles from "./Table.module.css";
const Table = () => {
  return (
    <table className={Styles.result}>
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
