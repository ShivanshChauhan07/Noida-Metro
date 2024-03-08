import React from "react";

const Balance = () => {
  return (
    <>
      <h3 className="text-3xl font-medium px-12 py-2">Balances</h3>
      <div className="bg-zinc-100 flex flex-col items-center gap-y-4 w-3/4 mx-auto shadow-inner rounded-md py-2">
        <div className="flex w-1/2 justify-between  ">
          <h6 className="text-lg font-medium">Account Balance:</h6>
          <p className="text-lg">123</p>
        </div>
        <div className="flex w-1/2 justify-between ">
          <h6 className="text-lg font-medium">
            Last Update Card <br /> Balance:{" "}
          </h6>
          <p className="text-lg">123</p>
        </div>
        <div className="flex w-1/2 justify-between ">
          <h6 className="text-lg font-medium">
            Offline Usage After <br /> Last TopUp:
          </h6>
          <p className="text-lg">81</p>
        </div>
      </div>
      <h4 className="text-red-600 font-medium mt-3 ">
        Note: Account Balance is Inclusive of Last Update Card Balance.
      </h4>
    </>
  );
};

export default Balance;
