import React from "react";
import { ChartLegendLabel } from "./Doughnut";

const data = [
  { value: "25%", text: "New Work", color: "#4DBD98" },
  { value: "15%", text: "Rework", color: "#23B3E8" },
  { value: "40%", text: "Refactor", color: "#03293D" },
  { value: "20%", text: "Bugs", color: "#F15832" },
];

const ColumnChart = () => {
  return (
    <div>
      <div className="w-full flex py-[1em] ">
        {data.map((item, index) => (
          <div
            className={`${index === 0 && "rounded-l-full"} ${
              index === data.length - 1 && "rounded-r-full"
            } h-[37px] `}
            style={{ width: item.value, background: item.color }}
          ></div>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          {data.map((item) => (
            <ChartLegendLabel
              color={item.color}
              label={item.value}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
