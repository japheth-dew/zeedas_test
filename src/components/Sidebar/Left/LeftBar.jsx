import React, { useState } from "react";
import drop from "../../../assets/svgs/drop.svg";
import search from "../../../assets/svgs/search.svg";
import expand_arrow from "../../../assets/svgs/expand_arrow.svg";
import home from "../../../assets/svgs/home.svg";
import inbox from "../../../assets/svgs/inbox.svg";
import project from "../../../assets/svgs/project.svg";
import people from "../../../assets/svgs/people.svg";
import wallet from "../../../assets/svgs/wallet.svg";

const SidebarIcon = ({ image, activeState, setActiveState }) => {
  const handleClick = () => {
    setActiveState(image);
  };
  return (
    <button
      onClick={handleClick}
      className={`${
        activeState === image && "bg-[#23B3E8] rounded-[10px]"
      } flex items-center justify-center w-[2em] h-[2em]  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-200`}
    >
      <img className="max-w-[2em]" src={image} alt={image} />
    </button>
  );
};

// Sidebar----------------
const LeftBar = () => {
  const [activeState, setActiveState] = useState(home);

  return (
    <div className="font-nunito bg-[#052231] w-[5em]  h-screen  top-0 bottom-0 left-0 flex  justify-center py-6">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          {/* utilities-------------------- */}
          <div className="flex flex-col gap-4 ">
            <SidebarIcon image={drop} />
            <SidebarIcon image={search} />
          </div>
          {/* utilities-------------------- */}

          {/* navigation-------------- */}
          <div className="flex flex-col gap-2">
            <SidebarIcon
              image={home}
              activeState={activeState}
              setActiveState={setActiveState}
            />
            <SidebarIcon
              image={inbox}
              activeState={activeState}
              setActiveState={setActiveState}
            />
            <SidebarIcon
              image={project}
              activeState={activeState}
              setActiveState={setActiveState}
            />
            <SidebarIcon
              image={people}
              activeState={activeState}
              setActiveState={setActiveState}
            />
            <SidebarIcon
              image={wallet}
              activeState={activeState}
              setActiveState={setActiveState}
            />
          </div>
          {/* navigation-------------- */}

          {/* team------------------ */}
          <div className=" flex flex-col gap-2 ">
            <button className="w-[2em] h-[2em] flex items-center justify-center rounded-full bg-[#23B3E8] ">
              <p className=" font-[500] text-white text-[12px]">PN</p>
            </button>
            <button className="w-[2em] h-[2em] flex items-center justify-center rounded-full bg-[#4DBD98] ">
              <p className=" font-[500] text-white text-[12px]">JI</p>
            </button>
            <button className="w-[2em] h-[2em] flex items-center justify-center rounded-full bg-[#3D43A2] ">
              <p className=" font-[500] text-white text-[12px]">LG</p>
            </button>
            <button className="w-[2em] h-[2em] flex items-center justify-center rounded-full bg-[#F15832] ">
              <p className=" font-[500] text-white text-[12px]">AW</p>
            </button>
          </div>
          {/* team------------------ */}
        </div>

        <div>
          <SidebarIcon image={expand_arrow} />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
