import React from "react";

const Bar = ({ color, value }) => {
  console.log(value);
  return (
    <div
      className="rounded-t-2xl"
      style={{
        background: color === "idle" ? "#03293D1A" : "#4DBD98",
        height: value,
        width: "24px",
      }}
    ></div>
  );
};

const BarChart = ({ title, data }) => {
  return (
    <div >
      <div className="flex gap-4 items-end">
        {data.map((item) => (
          <Bar color={item.color} value={item.value} />
        ))}
      </div>
      <p className="font-nunito font-[400] text-center">{title}</p>
    </div>
  );
};

export default BarChart;
