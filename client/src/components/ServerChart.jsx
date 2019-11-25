import React from "react";
import Chart from "react-google-charts";

const ServerChart = props => {

  return (
    <div>
      <Chart
        width={1500}
        height={900}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          title: "6R Breakdown by Host",
          chartArea: { width: "30%" },
          hAxis: {
            title: "Total Hosts",
            minValue: 0
          },
          vAxis: {
            title: ""
          }
        }}
        legendToggle
      />
    </div>
  );
};

export default ServerChart;
