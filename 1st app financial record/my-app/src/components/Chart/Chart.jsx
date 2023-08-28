import React from "react";
import "./Chart.css";
import CharBar from "./CharBar";
function Chart(props) {
  let MaximumCount = props.dataPoints.map((dataPoint) =>
    parseInt(dataPoint.value)
  );
  let max = Math.max(...MaximumCount);
  let index = MaximumCount.indexOf(max);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint, i) => (
        <CharBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={max}
          color={index == i && "red"}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
}

export default Chart;
