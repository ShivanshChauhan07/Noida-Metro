import React from "react";

const CardHotlist = () => {
  return (
    <>
      <div className=" w-full flex ">
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 h-2/3 p-3 flex flex-col gap-y-8 rounded-md shadow-lg">
            <h2 className="text-3xl font-medium p-3">Card Statement</h2>
            <div className="bg-zinc-100 flex flex-col w-3/4 mx-auto gap-y-7 shadow-inner rounded-md p-2">
              <div className="flex justify-around ">
                <h4 className="text-lg font-medium">Card Number</h4>
                <input
                  className="border border-slate-400 rounded-sm p-1"
                  type="text"
                  placeholder="Card Number"
                  defaultValue="xxxxxxxxxxxxx"
                  disabled="true"
                />
              </div>
              <div className="flex flex-col gap-y-10">
                <div className="flex justify-around">
                  <h3 className="text-lg font-medium">Product:</h3>
                  <input
                    className="p-1 border-2 rounded-md border-slate-300 text-center"
                    type="text"
                    disabled="true"
                    defaultValue="City 1 Metro Card"
                  />
                </div>
                <div className="flex justify-around">
                  <h3 className="text-lg font-medium">Status:</h3>
                  <input
                    className="p-1 border-2 rounded-md border-slate-300 text-center"
                    type="text"
                    disabled="true"
                    defaultValue="Active"
                  />
                </div>
              </div>
            </div>
            <button className="bg-green-500 p-2 text-white text-lg font-medium rounded-md">
              Card Hotlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHotlist;
