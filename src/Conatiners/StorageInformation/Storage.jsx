import { Box } from "../../Components/Conatiner/Conatiner";
import styles from "./Storage.module.css";
import Chart from "react-apexcharts";

export default function Storage() {
    const allData = JSON.parse(localStorage.getItem("Data"));
    const backgroundColor = ["#28a745", "#17a2b8", "#FF0000"];
  var options = {
    colors: [...backgroundColor],
    legend: {
        position: 'top',
    },
   
    series: [allData.dasbhoardPage.storage.available , allData.dasbhoardPage.storage.system ,allData.dasbhoardPage.storage.used],
    chart: {
      width: 380,
      type: "pie",
      foreColor: "#fff",
      toolbar: {
        show: false,
      },
    },
    labels: ["Available Storage", "System Storage", "Used Storage"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    tooltip: {
        enabled: false,
      },
  };
  return (
    <Box className={styles.primaryBox}>
      <h3>Storage Information</h3>
      <Chart
        options={options}
        series={options.series}
        type="pie"
        width={465}
        height={290}
      />
    </Box>
  );
}
