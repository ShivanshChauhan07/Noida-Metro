import React from "react";

const Profile = () => {
  return (
    <div className=" w-full flex ">
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2 h-2/3 p-3 flex flex-col gap-y-8 rounded-md shadow-lg">
          <h2 className="text-3xl font-medium p-3">My Profile</h2>
          <div className="flex justify-around">
            <h4 className="text-lg font-medium">Card Number</h4>
            <input
              className="border border-slate-400 rounded-md p-1"
              type="text"
              placeholder="Card Number"
              defaultValue="xxxxxxxxxxxxx"
              disabled={true}
            />
          </div>

          <div
            className="bg-zinc-100 flex h-2/5 w-4/5
           mx-auto shadow-inner rounded-md p-2 justify-around"
          >
            <div className="flex  flex-col justify-around content-around ">
              <div className="flex justify-between gap-x-6">
                <h3 className="text-lg font-medium">Name:</h3>
                <h6>Shivansh Chauhan</h6>
              </div>
              <div className="flex justify-between gap-x-6">
                <h3 className="text-lg font-medium">Email:</h3>
                <h6>shiv37xx@gmail.com</h6>
              </div>
            </div>
            <div className="flex flex-col justify-around content-around">
              <div className="flex justify-between gap-x-6">
                <h3 className="text-lg font-medium">Contact:</h3>
                <h6>828785xxxx</h6>
              </div>
              <div className="flex justify-between gap-x-6">
                <h3 className="text-lg font-medium">Address:</h3>
                <h6>Greater Noida</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
