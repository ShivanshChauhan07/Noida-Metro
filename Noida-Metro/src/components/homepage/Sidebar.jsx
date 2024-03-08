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
            <h5 className="text-2xl font-medium text-center">
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
            <motion.h6
              variants={variants}
              className="text-center text-lg hover:bg-slate-300 cursor-pointer border border-black p-1"
            >
              <Link to={"/homepage"}> Card Details</Link>
            </motion.h6>
            <motion.h6
              variants={variants}
              className="text-center text-lg hover:bg-slate-300 cursor-pointer border border-black p-1"
            >
              <Link to={"/homepage/recharge"}> Recharge Card</Link>
            </motion.h6>
            <motion.h6
              variants={variants}
              className="text-center text-lg hover:bg-slate-300 cursor-pointer border border-black p-1"
            >
              Card Hotlist
            </motion.h6>
          </motion.div>
        </div>
        <div className="">
          <h5 className="text-2xl font-medium text-center">
            <Link to={"/homepage/statement"}>View Card Statement</Link>
          </h5>
        </div>
        <div className="">
          <h5 className="text-2xl font-medium text-center">My Profile</h5>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
