import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  initial: {
    opacity: 0,
    y: -20,
    x: -20,
  },
  final: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 300,
      damping: 5,
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};

const Sidebar = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="bg-zinc-50 w-1/6">
      <div className="h-full flex flex-col justify-around py-10 relative">
        <div
          className=" "
          onClick={() => {
            setPopup(!popup);
          }}
        >
          <div className="Wrapper flex justify-between px-1 cursor-pointer ">
            <h5 className="text-2xl font-medium text-center hover:text-orange-400">
              Customer-Card Management
            </h5>
            <div className="my-auto">
              {!popup ? (
                <i className="fa-solid fa-angle-down"></i>
              ) : (
                <i className="fa-solid fa-angle-up"></i>
              )}
            </div>
          </div>

          <motion.div
            className={
              popup ? "block absolute w-full border border-black" : "hidden"
            }
            variants={variants}
            initial="initial"
            whileInView="final"
          >
            <Link to={"/homepage"}>
              <motion.h6
                variants={variants}
                className="text-center text-lg hover:bg-slate-300 cursor-pointer border border-black p-1"
              >
                Card Details
              </motion.h6>
            </Link>
            <Link to={"/homepage/recharge"}>
              <motion.h6
                variants={variants}
                className="text-center text-lg hover:bg-slate-300 cursor-pointer border border-black p-1"
              >
                Recharge Card
              </motion.h6>
            </Link>
            <Link to={"/homepage/hotlist"}>
              <motion.h6
                variants={variants}
                className="text-center text-lg hover:bg-slate-300 cursor-pointer border border-black p-1"
              >
                Card Hotlist
              </motion.h6>
            </Link>
          </motion.div>
        </div>
        <div className="">
          <Link to={"/homepage/statement"}>
            <h5 className="text-2xl font-medium text-center hover:text-orange-400">
              View Card Statement
            </h5>
          </Link>
        </div>
        <div className="">
          <Link to={"/homepage/profile"}>
            <h5 className="text-2xl font-medium text-center cursor-pointer hover:text-orange-400">
              My Profile
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
