import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartLegendLabel = ({ label, color, text }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        style={{ background: color }}
        className={`rounded-full w-[15px] h-[15px] `}
      ></div>
      <div className="font-600 font-nunito">
        <span className="font-[700] text-[#03293D]">{label}</span>
        {text && <span className="font-[500] text-[#03293D80]"> {text}</span>}
      </div>
    </div>
  );
};

const DoughnutChart = () => {
  const labels = [
    "4hrs Coding",
    "8hrs Code Review",
    "1hr QA Review",
    "3hr Idle Time",
    "1hr Deployment",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Cycle Time",
        data: [4, 8, 1, 3, 1],
        backgroundColor: [
          "#4dbd98",
          "#23b3e8",
          "#03293d",
          "#f15832",
          "#826af9",
        ],
        borderColor: ["#4dbd98", "#23b3e8", "#03293d", "#f15832", "#826af9"],
      },
    ],
  };

  const chartLabels = labels;
  const colors = data.datasets[0].backgroundColor;
  const buildMap = (keys, values) => {
    const map = new Map();
    for (let i = 0; i < keys.length; i++) {
      map.set(keys[i], values[i]);
    }
    return map;
  };

  const mappedList = [];
  buildMap(chartLabels, colors).forEach((value, key) => {
    mappedList.push({ label: key, color: value });
  });

  const options = {
    responsive: true,
    plugins: {
      legend: false,
     
    },
    cutout: "80%",
    label: "Time Spent",
  };

  return (
    <div className="flex  justify-center items-center gap-4">
      <div className="flex flex-col ">
        <div className="relative w-[13em]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="font-nunito text-[#03293D] flex flex-col text-center w-[6em] relative -top-[9em] left-[3.3em] bottom-0 ">
          <span className="font-[700] text-[16px]">17hrs</span>
          <span className="text-[12px]">
            Average across 50 tickets in 4 weeks
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 ">
        {mappedList.map((item) => {
          return <ChartLegendLabel label={item.label} color={item.color} />;
        })}
      </div>
    </div>
  );
};

export default DoughnutChart;
export { ChartLegendLabel };
