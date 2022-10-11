import React, { useState } from "react";
import arrow from "../../../assets/svgs/arrow.svg";
import fcmb from "../../../assets/svgs/fcmb.svg";
import cl_arrow from "../../../assets/svgs/cl_arrow.svg";
import more from "../../../assets/svgs/more.svg";

const overview_name_list = [
  "Project Stats",
  "Planning",
  "Teamwork",
  "Team Health",
  "Investment",
];

const null_list = ["nothing to show here", "also no data here"];

const rightbar_item_list = [
  { name: "Overview", data_list: overview_name_list },
  { name: "Action Center", data_list: null_list },
  { name: "Apps", data_list: null_list },
  { name: "Tasks", data_list: null_list },
  { name: "Code Review", data_list: null_list },
  { name: "QA Review", data_list: null_list },
  { name: "Notes", data_list: null_list },
];

const RightBarItemButton = ({ name, active, setActive }) => {
  const handleClick = () => {
    setActive(name);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        active === name
          ? "border-l-[#23B3E8] text-[#23B3E8]"
          : "border-l text-[#03293D80]"
      } border-l-[3px] px-[7px] py-[8px] `}
    >
      <p className="font-[700]  text-[14px] text-left ">{name}</p>
    </button>
  );
};

const RightBarItem = ({ data_list, name, activeNav, setActiveNav }) => {
  const [active, setActive] = useState(data_list[0]);


  const handleClick = () => {
    setActiveNav(name);
  };
  return (
    <div className="font-nunito flex flex-col gap-4">
      <button
        onClick={handleClick}
        className="rounded-2xl w-full flex justify-between cursor-pointer items-center "
      >
        <span
          className={`font-[700] text-[14px] ${
            activeNav === name ? "text-[#23B3E8]" : " text-[#03293D80]"
          } `}
        >
          {name}
        </span>
        <img
          className={`${activeNav === name && "rotate-180"}`}
          src={cl_arrow}
          alt=""
        />
      </button>
      {activeNav === name && (
        <div className="flex flex-col ">
          {data_list.map((name) => (
            <RightBarItemButton
              name={name}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const RightBar = () => {
  const [activeNav, setActiveNav] = useState(rightbar_item_list[0].name);

  const [showBar, setShowBar] = useState(true)

  return (
    <div>
      {!showBar && (
        <div className="p-3 py-[1.6em]">
          <button
            onClick={() => setShowBar(true)}
            className="rounded-2xl  w-[2em] h-[2em] bg-red-200 flex justify-center items-center"
          >
           
              <img className="-rotate-180" src={arrow} alt="" />
          
          </button>
        </div>
      )}

      {showBar && (
        <div className="py-[2em] max-w[13.75em] w-[13.75em]  px-[1.2em] flex flex-col gap-8 overflow-y-scroll no-scrollbar">
          {/* Top.............................. */}
          <button
            onClick={() => setShowBar(!showBar)}
            className="flex gap-3 items-center w-full "
          >
            <div className="rounded-full flex items-center justify-center">
              <img src={arrow} alt="" />
            </div>
            <div className="  flex gap-1 items-center">
              <img className="w-[17px]" src={fcmb} alt="" />
              <p className="font-futura font-[700] ">FCMB: Mobile</p>
            </div>
            <img src={more} alt="" />
          </button>

          {/* Workflows..................... */}
          <div className="font-nunito flex flex-col gap-2">
            <p className="text-[#03293D80] ">Workflows</p>
            <button className="rounded-2xl w-full p-[12px] bg-[#03293D0D] flex justify-between  transition ease-in-out delay-100  hover:scale-110 duration-100">
              <span className="font-[600] text-[#03293D] text-[14px] ">
                Product Dev
              </span>
              <img className="-rotate-90" src={arrow} alt="" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {rightbar_item_list.map(({ name, data_list }) => (
              <RightBarItem
                name={name}
                data_list={data_list}
                activeNav={activeNav}
                setActiveNav={setActiveNav}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightBar;
