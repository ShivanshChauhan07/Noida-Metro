import React from "react";
import RightPanel from "../components/signIn/RightPanel";
import LeftPanel from "../components/signIn/LeftPanel";

const SignIn = () => {
  return (
    <div className="w-screen h-screen  flex">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default SignIn;
