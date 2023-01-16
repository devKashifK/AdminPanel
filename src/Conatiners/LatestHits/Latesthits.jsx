import { Box } from "../../Components/Conatiner/Conatiner";
import styles from "./Latest.module.css";
import Chart from "react-apexcharts";

export default function LatestHits() {
  const allData = JSON.parse(localStorage.getItem("Data"));
  const backgroundColor = ["#20c997", "#e83e8c", "#6f42c1"];

  var options = {
    colors: [...backgroundColor],
    series: [
      {
        name: "Latest",
        data: [...allData.dasbhoardPage.latestHits.latest],
      },
      {
        name: "Popular",
        data: [...allData.dasbhoardPage.latestHits.popular],
      },
      {
        name: "Featured",
        data: [...allData.dasbhoardPage.latestHits.featured],
      },
    ],
    legend: {
        position: 'top',
    },
    chart: {
      height: 350,
      type: "line",
      foreColor: "#fff",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "months",
      categories: [...allData.dasbhoardPage.latestHits.months],
    },
    yaxis: {
      min: 10,
      max: 100,
      tickAmount: 9,
    },
    tooltip: {
      enabled: false,
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <Box className={styles.primaryBox}>
      <h3>Latest Hits</h3>
      <Chart
        options={options}
        series={options.series}
        type="line"
        width={465}
        height={290}
      />
    </Box>
  );
}
