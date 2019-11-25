import React from "react";
import Chart from "react-google-charts";

const ApplicationChart = props => {

  console.log("in ApplicationChart")
  return (
    <div>
      <Chart
        width={1500}
        height={900}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          title: "6R Breakdown b  y Application",
          chartArea: { width: "30%" },
          hAxis: {
            title: "Total Population",
            minValue: 0
          },
          vAxis: {
            title: "City"
          }
        }}
        legendToggle
      />
    </div>
  );
};

export default ApplicationChart;
