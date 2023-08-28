import React from "react";
import "./ChartBar.css";

function CharBar(props) {
  let barFillHight = "0%";
  if (props.maxValue > 0) {
    barFillHight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHight }}></div>
      </div>
      <div className="chart-bar__lable">{props.lable}</div>
    </div>
  );
}

export default CharBar;
