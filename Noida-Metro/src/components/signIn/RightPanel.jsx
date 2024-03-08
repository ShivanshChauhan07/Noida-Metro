import React from "react";

const RightPanel = () => {
  return (
    <div className="h-full w-5/12 shadow-2xl ">
      <div className=" p-5 py-20">
        <div className="flex flex-col items-center justify-around">
          <img className="h-12 w-12" src="/login.png" alt="email-logo" />
          <h3 className="text-2xl font-normal w-fit py-2">Sign in</h3>
        </div>
        <div className=" ">
          <form className="flex flex-col">
            <input
              className="p-3 border-2 border-slate-500 rounded-md my-5"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-3 border-2 border-slate-500 rounded-md my-5"
              type="password"
              placeholder="Password"
            />
            <div className="my-3 p-2">
              <input
                className="border-2 border-slate-500 scale-150"
                type="checkbox"
                name="check"
              />
              <label className="mx-4" htmlFor="check">
                Remember Me
              </label>
            </div>
            <button
              className="p-2 bg-blue-500 text-white text-lg font-medium rounded-md"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="">
            <div className="flex justify-between my-5">
              <a href="" className="text-blue-600 underline">
                Forgot Password ?
              </a>
              <a href="" className="text-blue-600 underline">
                Don't have an account? Sign Up
              </a>
            </div>
            <footer className="text-center py-3">Copyright © NMRC 2024.</footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
