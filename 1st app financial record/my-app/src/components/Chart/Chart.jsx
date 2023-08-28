import React from "react";
import "./Chart.css";
import CharBar from "./CharBar";
function Chart(props) {
  let MaximumCount = props.dataPoints.map((dataPoint) => dataPoint.value);
  let max = Math.max(...MaximumCount);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <CharBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={max}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}

export default Chart;
