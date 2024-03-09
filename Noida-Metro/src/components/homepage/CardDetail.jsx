import React from "react";

const CardDetail = () => {
  return (
    <>
      <div className="flex justify-between">
        <h6 className="my-auto text-lg font-medium"> Card Number</h6>
        <input
          className="border border-slate-400 rounded-sm p-2 w-4/6"
          type="text"
          placeholder="Card Number"
          disabled={true}
          defaultValue="xxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="bg-zinc-100 h-1/2 w-3/4 mx-auto shadow-inner flex flex-col items-center justify-around rounded-md ">
        <div className="w-1/2 flex justify-between">
          <h6 className="text-xl font-medium">Product:</h6>
          <p className="text-lg">City1 Metro Card</p>
        </div>
        <div className="w-1/2 flex justify-between">
          <h6 className="text-xl font-medium">Current Status:</h6>
          <p className="text-lg">Active</p>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
