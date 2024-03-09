import React, { useRef, useState } from "react";
import CardDetail from "./CardDetail";
import Balance from "./Balance";

const Details = () => {
  const [pagination, setPagination] = useState("");
  return (
    <div className=" w-5/6 p-7">
      <h2 className="p-6 text-4xl font-semibold">Card Details</h2>
      <div className="flex justify-center gap-x-20 my-3">
        <button
          className="cursor-pointer text-lg p-2 f bg-green-500 text-white rounded-md hover:shadow-lg"
          onClick={() => setPagination("card")}
        >
          Card Infomation
        </button>
        <button
          className="cursor-pointer text-lg p-2  bg-green-500 text-white rounded-md hover:shadow-lg"
          onClick={() => setPagination("balance")}
        >
          Current Balance
        </button>
      </div>
      <div className=" w-2/4 h-3/5 mx-auto  shadow-xl p-4 my-8 flex flex-col justify-evenly rounded-md">
        {pagination === "balance" ? <Balance /> : <CardDetail />}
      </div>
    </div>
  );
};

export default Details;
