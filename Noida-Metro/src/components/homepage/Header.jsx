import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const date = new Date();
  const currTime = date.getFullYear();
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between bg-gradient-to-b from-[#342884] to-[#c9c1ff] text-white py-6">
      <div className="h-20 w-52 p-3">
        <img className="h-full w-full" src="/logo.png" alt="logo" />
      </div>
      <div className=" flex">
        <div className=" w-72 my-auto">
          <h6 className="">Last Login Date & Time: {currTime}</h6>
        </div>
        <div className=" w-72 flex justify-around items-center">
          <img className="w-8" src="/login.png" alt="" />
          <h5 className="text-lg text-nowrap text-ellipsis overflow-hidden w-[55%]">
            Shivansh Chauhan asfasfasf
          </h5>
          <button
            className="text-md font-medium text-white bg-red-600 p-2 rounded-md hover:bg-red-700"
            onClick={() => {
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
