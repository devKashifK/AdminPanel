import Chart from "react-apexcharts";
import { Box } from "../../Components/Conatiner/Conatiner";
import styles from "./Performance.module.css";

export default function Performance() {
  const allData = JSON.parse(localStorage.getItem("Data"));
  const backgroundColor = ["#20c997", "#e83e8c", "#6f42c1"];

  const options = {
    colors: [...backgroundColor],
    chart: {
      type: "bar",
      height: 350,
      foreColor: "#fff",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "10%",
      },
    },
    series: [
      {
        data: [
          {
            x: "Aqua",
            y: allData.dasbhoardPage.performance.Aqua,
            fillColor: "#00FFFF",
            strokeColor: "#00FFFF",
          },
          {
            x: "Blue",
            y: allData.dasbhoardPage.performance.Blue,
            fillColor: "#0000FF",
            strokeColor: "#0000FF",
          },
          {
            x: "Green",
            y: allData.dasbhoardPage.performance.Green,
            fillColor: "#00FF00",
            strokeColor: "#00FF00",
          },
          {
            x: "Orange",
            y: allData.dasbhoardPage.performance.Orange,
            fillColor: "#FFA500",
            strokeColor: "#FFA500",
          },
          {
            x: "Purple",
            y: allData.dasbhoardPage.performance.Purple,
            fillColor: "#A020F0",
            strokeColor: "#A020F0",
          },
          {
            x: "Red",
            y: allData.dasbhoardPage.performance.Red,
            fillColor: "#FF0000",
            strokeColor: "#FF0000",
          },
          {
            x: "Yellow",
            y: allData.dasbhoardPage.performance.Yellow,
            fillColor: "#FFFF00",
            strokeColor: "#FFFF00",
          },
        ],
      },
    ],
    xaxis: {
      min: 20,
      max: 60,
      tickAmount: 5,
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
  
  };
  return (
    <Box className={styles.primaryBox}>
      <h3>Performance</h3>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        width={465}
        height={290}
      />
    </Box>
  );
}
