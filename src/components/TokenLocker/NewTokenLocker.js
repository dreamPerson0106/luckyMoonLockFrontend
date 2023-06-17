import React from "react";
import { useSelector } from "react-redux";
import "./tokenlocker.css";
import { DownArrowIcon, EyeIcon, PadLockIcon } from "../../assets/Icons";

const NewTokenLocker = () => {
  const {
    wallet_address,
    font,
    fontHolder,
    border,
    background,
    backgroundHolder,
    button,
  } = useSelector((state) => state);
  return (
    <div className={`w-full mx-auto max-w-xl text-[${font}]  my-20 `}>
      <div className="flex gap-10 mb-3">
        <p>
          <PadLockIcon color={font} />
          New Lock
        </p>
        <p className={`text-[${fontHolder}]`}>
          <PadLockIcon color={fontHolder} />
          View Locks
        </p>
      </div>
      <div className={`box bg-[${background}] border-[${border}]`}>
        <div
          className={`flex justify-between items-center border-b-[1px] border-[${border}] pb-2`}
        >
          <p>Lock (1)</p>
          <button
            className={`px-4 py-2 rounded-md bg-[${button}] flex items-center gap-2`}
          >
            Token View <EyeIcon color={fontHolder} />
          </button>
        </div>
        <div
          className={`flex justify-between items-center border-b-[1px] border-[${border}] pb-2`}
        >
          <button className="text-slate-50 flex gap-2 items-center px-4 py-2 bg-[#1ECD84] rounded-md">
            <DownArrowIcon color={"#fff"} /> Add a Lock
          </button>
          <div className="flex gap-3">
            <button
              className={`px-4 py-2 rounded-md bg-[${button}] flex items-center gap-2`}
            >
              Download CSV
            </button>
            <button
              className={`px-4 py-2 rounded-md bg-[${button}] flex items-center gap-2`}
            >
              Import CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTokenLocker;
