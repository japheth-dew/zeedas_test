import React from "react";
import more from "../../../assets/svgs/more.svg";
import small_arrow from "../../../assets/svgs/small_arrow.svg";
import info from "../../../assets/svgs/info.svg";
import green_small_arrow from "../../../assets/svgs/green_small_arrow.svg";
import red_small_arrow from "../../../assets/svgs/red_small_area.svg";
import Doughnut, { ChartLegendLabel } from "../../minion_components/Charts/Doughnut";
import ColumnChart from "../../minion_components/Charts/ColumnChart";
import BarChart from "../../minion_components/Charts/BarChart";

const Card = (props) => {
  return (
    <div className="bg-white rounded-xl p-[1em] w-full">
      <div className="flex justify-between items-center">
        <div className="text-[#03293D] font-[600] flex items-center gap-3 mb-[1em]">
          <span className="font-nunito ">{props.name}</span>
          <img src={info} alt="" />
        </div>
        {
          props.extra && (
            <div>{props.extra}</div>
          )
        }
      </div>

      <div>{props.children}</div>
    </div>
  );
};

const TopRight = ()=>{
   const data = [
     { value: "Idle", color: "#03293D1A" },
     { value: "Productive", color: "#4DBD98" },
   ];
  return (
    <div className="flex gap-4">
      {data.map((item) => (
        <ChartLegendLabel color={item.color} label={item.value} />
      ))}
    </div>
  );}

const ProjectStats = () => {
  const data = [
    {
      title: "Code",
      data: [
        { value: "11em", color: "idle" },
        { value: "4em", color: "Productive" },
      ],
    },
    {
      title: "Code Review",
      data: [
        { value: "5em", color: "idle" },
        { value: "10em", color: "Productive" },
      ],
    },
    {
      title: "Code Review",
      data: [
        { value: "5em", color: "idle" },
        { value: "10em", color: "Productive" },
      ],
    },
    
  ];
  return (
    <div className="border-l-[3px] border-l-[#03293D1A]  py-[2em] px-[2.5em] w-full bg-[#E5E5E5]">
      <div className="flex justify-end w-full px-[3em] py-[1em]">
        <img src={more} alt="" />
      </div>

      {/* main body ................................... */}
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between items-center">
          <p className="font-[700] font-futura text-16px]">Project Stats</p>
          <button className="rounded-xl px-[1em] py-[.5em] bg-white flex gap-3 items-center">
            <span>All time</span>
            <img src={small_arrow} alt="" />
          </button>
        </div>

        <div className="flex md:flex-row flex-col gap-4 w-full">
          {/* Left side ............................... */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex md:flex-row flex-col  gap-3">
              {/* Average PR size...................... */}
              <Card name={"Average PR size"}>
                <div className="">
                  <div className="text-[#03293D] flex gap-8 mt-1">
                    <div>
                      <span className="text-[20px] font-[700] font-futura ">
                        968
                      </span>
                      <span className="font-[400] font-nunito text-[12px]">
                        lines
                      </span>
                      <p>Line change </p>
                    </div>
                    <div>
                      <span className="text-[20px] font-[700] font-futura ">
                        240
                      </span>
                      <span className="font-[400] font-nunito text-[12px]">
                        kb
                      </span>
                      <p>Size </p>
                    </div>
                  </div>

                  {/* percentge .............. */}
                  <button className="text-[#4DBD98] bg-[#4DBD981A] px-[6px] py-[4px]  flex gap-1 items-center  rounded mt-[2em] font-[700] font-nunito">
                    <img src={green_small_arrow} alt="" />
                    <span>24%</span>
                  </button>
                </div>
              </Card>

              {/* Average ticket duration................................. */}
              <Card name={"Average ticket duration"}>
                <div className="">
                  <div className="text-[#03293D] flex gap-8 mt-1">
                    <div>
                      <span className="text-[20px] font-futura ">36</span>
                      <span className="font-[400] font-nunito text-[12px]">
                        hours
                      </span>
                      <p>Hours worked </p>
                    </div>
                  </div>

                  {/* percentge .............. */}
                  <button className="text-[#F15832] bg-[#F158321A] px-[6px] py-[4px]  flex gap-1 items-center  rounded mt-[2em] font-[700] font-nunito">
                    <img src={red_small_arrow} alt="" />
                    <span>79%</span>
                  </button>
                </div>
              </Card>
            </div>

            {/* Cycle time............................... */}
            <div className="">
              <Card name={"Cycle Time"}>
                <div className="flex items-center w-full">
                  {/* percentge .............. */}
                  <div className="w-full">
                    <div className="flex items-center justify-center w-full ">
                      <Doughnut />
                    </div>

                    <button className="text-[#4DBD98] bg-[#4DBD981A] px-[6px] py-[4px]  flex gap-1 items-center  rounded font-[700] font-nunito">
                      <img src={green_small_arrow} alt="" />
                      <span>24%</span>
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right side ......................... */}
          <div className="flex flex-col gap-4 w-full">
            <Card name={"Work Breakdown"}>
              <div className="">
                <div className="text-[#03293D] flex gap-8 mt-1">
                  <div>
                    <span className="text-[20px] font-[700] font-futura ">
                      968
                    </span>
                    <span className="font-[400] font-nunito text-[12px]">
                      lines
                    </span>
                  </div>
                  <div>
                    <span className="text-[20px] font-[700] font-futura ">
                      54
                    </span>
                    <span className="font-[400] font-nunito text-[12px]">
                      tickets
                    </span>
                  </div>
                  <div>
                    <span className="text-[20px] font-[700] font-futura ">
                      4
                    </span>
                    <span className="font-[400] font-nunito text-[12px]">
                      total weeks worked
                    </span>
                  </div>
                </div>

                {/* Chart area .............................. */}
                {/* Built the Chart from scratch due to design provide on UI, and i couldn't find exact type, so i built it myself 😊, can be reuseable, just with few adjustment, every part is customizable too lols...👽
                 */}
                <div>
                  <ColumnChart />
                </div>
              </div>
            </Card>

            <Card name={"Idle Time Breakdown"} extra={<TopRight />}>
              <div className="h-[15em] flex w-full justify-around items-end">
                {data.map((item) => (
                  <BarChart title={item.title} data={item.data} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
