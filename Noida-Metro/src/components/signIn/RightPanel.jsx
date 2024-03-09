import React, { useRef, useState } from "react";
import formValidation from "../../utils/formValidation";

import { useNavigate } from "react-router-dom";

const RightPanel = () => {
  const [emailed, setEmailed] = useState("");
  const [emailError, setEmailerror] = useState(false);
  const [passwordError, setPassworderror] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

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
              ref={emailRef}
            />
            <input
              className="p-3 border-2 border-slate-500 rounded-md my-5"
              type="password"
              placeholder="Password"
              ref={passwordRef}
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
              className="p-2 bg-blue-500 text-white text-lg font-medium rounded-md hover:bg-blue-700"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                const result = formValidation(
                  emailRef.current.value,
                  passwordRef.current.value,
                  setEmailerror,
                  setPassworderror
                );
                if (result === null) {
                  navigate("/homepage");
                  setEmailed(emailRef.current.value);
                  email(emailRef.current.value);
                  return;
                }
                if (emailError) alert("Email is not valid");
                if (passwordError) alert("Password is not valid");
              }}
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
