import React from "react";
import Sidebar from "./Sidebar";
import Details from "./Details";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-[82%] w-full  flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
