import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NewLockedToken() {
  const {
    font,
    fontHolder,
    border,
    background,
    hover,
    mainBg,
    button,
    buttonHolder,
    backgroundHolder,
  } = useSelector((state) => state.theme);
  return (
    <div
      className={`grid grid-cols-2 grid-rows-6 items-start  gap-10 max-w-[80%] mx-auto`}
    >
      <div
        className={`bg-[${background}] items-center rounded-lg border-[${border}] border-[1px]`}
        style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
      >
        <div
          className={`bg-[${mainBg}] px-5 text-[${fontHolder}] py-3 border-[${border}] border-b-[1px]`}
        >
          <p className={`text-lg text-[${font}]`}>
            <span className={`font-bold`}>🤔 $ COMET</span> SafeComet.xyz
          </p>
        </div>
        <div className={`flex justify-center mt-3 mb-1 text-[${fontHolder}]  `}>
          <Link to="#" className="text-sm text-center">
            0xF8b...C7b
          </Link>
        </div>
        <p className={`text-center mb-3 text-[${fontHolder}]`}>
          Total Supply: 1,000,000,000,000
        </p>
        <div
          className={`bg-[${font}] h-40 border-[${border}] border-[1px]`}
        ></div>
      </div>
      <div
        className={`bg-[${background}] items-center row-span-1 rounded-lg border-[${border}] border-[1px]`}
        style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
      >
        <div className={`bg-[${mainBg}] px-5 text-[${font}] py-3`}>
          <p className={`text-lg `}>🤔 $ COMET Token Locks</p>
        </div>
        <div
          className={`py-10 text-[${font}] border-[${border}] border-[1px] text-center`}
        >
          <p className="text-lg">No Tokens For This Token</p>
        </div>
      </div>
      <div
        className={`bg-[${background}] items-center  rounded-lg border-[${border}] border-[1px]`}
        style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
      >
        <div
          className={`bg-[${background}] px-5 text-[${font}] py-3 text-center`}
        >
          <p className={`text-lg `}>Pairs</p>
        </div>
        <p className={`text-[${fontHolder}] text-center bg-[${mainBg}] py-2`}>
          $COMET PAIRS
        </p>
        <div className={`py-10 text-[${font}] border-[${border}] border-[1px]`}>
          <div className="flex justify-between">
            <p className="text-lg px-5">🤔🤔 $COMET / BNB</p>
            <p className="text-lg px-5">0% locked</p>
          </div>
          <p className={`text-[${fontHolder}] text-sm px-5 mt-3`}>
            Liquidity: (2.77 T / 0.00000000061)
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewLockedToken;
