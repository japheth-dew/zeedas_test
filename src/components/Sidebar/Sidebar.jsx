import LeftBar from "./Left/LeftBar";
import RightBar from "./Right/RightBar";

// Sidebar----------------
const Sidebar = () => {

  return (
  <div className="flex sticky h-[100vh]  top-0 bottom-0 ">
    <LeftBar />
    <RightBar />
  </div>
  );
};

export default Sidebar;
