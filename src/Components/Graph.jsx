import { Line } from "react-chartjs-2";
import { useState } from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const Graph = () => {
  const [data, setData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        label: "Tempreture",
        data: [20, 23, 25, 26, 30, 34, 46, 40, 40, 38, 36, 27],
        backgroundColor: "#a4d7fe",
        borderColor: "#2ea3fc",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "#2ea3fc",
        pointRadius: "1",
        showLine: true,
      },
    ],
  });
  return (
    <div>
      <div style={{ width: "98%", height: "90%", padding: "15px" }}>
        <Line data={data}>Hello</Line>
      </div>
    </div>
  );
};

export default Graph;
