import React from "react";

const Recharge = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/2 h-1/2 p-3 flex flex-col gap-y-8 rounded-md shadow-lg">
        <h2 className="text-3xl font-medium p-3">Recharge Card</h2>
        <div className="bg-zinc-100 flex flex-col w-3/4 mx-auto gap-y-7 shadow-inner rounded-md p-2">
          <div className="flex justify-around ">
            <h4 className="text-lg font-medium">Recharge Amount</h4>
            <input
              className="border border-slate-400 rounded-sm p-1"
              type="text"
              placeholder="Amount"
            />
          </div>
          <button className="p-3 bg-green-500 w-1/3 mx-auto text-white font-medium cursor-pointer text-md rounded-md">
            Recharge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
