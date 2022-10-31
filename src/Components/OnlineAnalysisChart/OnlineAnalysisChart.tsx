import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import styles from "./OnlineAnalysisChart.module.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: " ",
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "April", "May"];
export const data = {
  labels,
  datasets: [
    {
      label: "Jan",
      data: { min: 10, max: 1000 },
      borderColor: "transparent",
      backgroundColor: "#00F5A0",
    },
    {
      label: "Feb",
      data: { min: 20, max: 1000 },
      borderColor: "transparent",

      backgroundColor: "#1d1dc2",
    },
    {
      label: "Mar",
      data: { min: 30, max: 200 },
      borderColor: "transparent",
      backgroundColor: "#3613bf",
    },
    {
      label: "April",
      data: { min: 600, max: 200 },
      borderColor: "transparent",
      backgroundColor: "#6913bf",
    },
    {
      label: "May",
      data: { min: 300, max: 500 },
      borderColor: "transparent",
      backgroundColor: "#1a97d6",
    },
  ],
};

const OnlineAnalysisChart = () => {
  return (
    <Line
      options={options}
      data={data}
      className={`${styles.onlineAnalysisChart} relative z-50 -top-32 left-52`}
    />
  );
};

export default OnlineAnalysisChart;
