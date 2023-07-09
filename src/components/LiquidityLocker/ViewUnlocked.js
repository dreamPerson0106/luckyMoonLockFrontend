import React from "react";
import { useSelector } from "react-redux";

function ViewUnlocked() {
  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    border,
    button,
    hover,
    wallet_address,
    mainBg,
  } = useSelector((state) => state.theme);
  return (
    <>
      <div className="flex justify-between gap-36 px-2">
        <div className="">
          <p className={`text-lg text-[${fontHolder}]`}>Value</p>
          <p className={`text-lg text-[bg-green-600] mt-1`}>$0</p>
          <p className="text-sm mt-1">0 univ 2</p>
        </div>
        <div className="text-right">
          <p className={`text-lg text-[${fontHolder}]`}>Unlocked Date</p>
          <p className={`text-lg text-[${font}] mt-1`}>in 2 minutes</p>
          <p className="text-sm mt-1">09/06/2023 : 05:33</p>
        </div>
      </div>
      <div
        className={`bg-[${backgroundHolder}] mt-3 rounded-lg py-3 px-5 mb-7`}
      >
        <p className={`text-[${font}]`}>Address</p>
        <p>0x1354276812934536457</p>
      </div>
      <div className="flex justify-between gap-36 px-2">
        <div className="">
          <p className={`text-lg text-[${fontHolder}]`}>Value</p>
          <p className={`text-lg text-[bg-green-600] mt-1`}>$0</p>
          <p className="text-sm mt-1">0 univ 2</p>
        </div>
        <div className="text-right">
          <p className={`text-lg text-[${fontHolder}]`}>Unlocked Date</p>
          <p className={`text-lg text-[${font}] mt-1`}>in 2 minutes</p>
          <p className="text-sm mt-1">09/06/2023 : 05:33</p>
        </div>
      </div>
      <div
        className={`bg-[${backgroundHolder}] mt-3 rounded-lg py-3 px-5 mb-7`}
      >
        <p className={`text-[${font}]`}>Address</p>
        <p>0x1354276812934536457</p>
      </div>
    </>
  );
}

export default ViewUnlocked;
