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

const Humdity = () => {

     const [data, setData] = useState({
       labels: [1, 2, 3],
       datasets: [
         {
           label: "Tempreture",
           data: [10, 50, 10],
           backgroundColor: "#fdf3da",
           borderColor: "#fdeba7",
           tension: 0.4,
           fill: true,
           pointStyle: "rect",
           pointBorderColor: "#fdf3da",
           //    pointRadius: "1",
           showLine: true,
         },
       ],
     });
    return (
      <div>
        <Line data={data}>Hello</Line>
      </div>
    );
};

export default Humdity;
