import React, { useState } from "react";
import { PadLockIcon } from "../../assets/Icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ViewLocked from "./ViewLocked";
import ViewUnlocked from "./ViewUnlocked";

function LockLiquidityTab() {
  const [tabStatus, setTabStatus] = useState("locked");
  const [activeTab, setActiveTab] = useState("locked");
  const { font, fontHolder, border } = useSelector((state) => state);
  return (
    <div className={`text-[${fontHolder}] p-5`}>
      <div className="flex justify-end">
        <button
          id=""
          className={`duration-500 ease-in-out flex px-3 py-2 gap-2 bg-green-600 text-[white] text-center text-lg  hover:bg-green-400 focus:outline-none  font-medium rounded-lg items-center `}
          type="button"
        >
          <PadLockIcon color={"white"} />
          <p>Lock Liquidity</p>
        </button>
      </div>
      <p className={`text-[${fontHolder}] text-center mt-5`}>
        Uniswap V2 – Gaafi Pair: 0056
      </p>
      <p className={`text-lg text-[${font}] mt-5`}>1 WETH = 2.2 K USDT</p>
      <p className={`text-lg text-[${font}] mt-1`}>1 USDT = 0.00045 WETH</p>
      <p className={`text-[${fontHolder}] text-center mt-5 text-lg`}>
        Lock Liquidity
      </p>
      <p className={`text-[${font}] text-center mt-1 text-lg`}>0%</p>
      {/* <div className="bg-[white] py-6 mt-5"></div> */}
      <div className="flex justify-between mt-3">
        <div>
          <p className={`text-lg text-[${font}] mt-5`}>WETH</p>
          <p className="flex gap-1.5 items-center">
            <PadLockIcon color="#458897" />
            🤔 0.0000009
          </p>
          <p>🤔 0.14(0%)</p>
        </div>
        <div className="text-right">
          <p className={`text-lg text-[${font}] mt-5`}>USDT</p>
          <p className="flex gap-1.5 items-center">
            <PadLockIcon color="#458897" />
            🤔 0.0000009
          </p>
          <p>🤔 0.14(0%)</p>
        </div>
      </div>
      <hr className={`mt-5 mb-3 border-[${border}]`} />
      <div className="flex justify-center gap-10">
        <Link className={`text-lg text-[${fontHolder} hover:text-[${font}]`}>
          Etherscan
        </Link>
        <Link className={`text-lg text-[${fontHolder} hover:text-[${font}]`}>
          Uniswap V2 Goeli
        </Link>
      </div>
      <hr className={`mb-5 mt-3 border-[${border}]`} />
      <p className={`text-lg text-[${fontHolder}] mt-3`}>Total LP tokens</p>
      <p className={`text-lg text-[${fontHolder}] mt-1`}>Total locked LP</p>
      {/* <p className={`text-lg text-[red] mt-1`}>
        Uniswap V2 - Goeli price API is down, dollar value not deteminble
      </p> */}

      <div>
        <div className="mb-4 mt-10">
          <ul
            className={`flex justify-center gap-10 flex-wrap -mb-px text-lg font-medium text-center border-b-2 border-[${border}]`}
            id="lockedTab"
            data-tabs-toggle="#lockedTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={`duration-500 ease-in-out inline-block p-4 rounded-t-lg  text-[${fontHolder}] hover:text-[${font}] ${
                  activeTab === "locked" && "border-b-4"
                }`}
                id="locked-tab"
                data-tabs-target="#locked-tab"
                type="button"
                role="tab"
                aria-controls="locked-tab"
                aria-selected="false"
                onClick={() => {
                  setTabStatus("locked");
                  setActiveTab("locked");
                }}
              >
                Locked
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`duration-500 ease-in-out inline-block p-4 rounded-t-lg  text-[${fontHolder}] hover:text-[${font}] ${
                  activeTab !== "locked" && "border-b-4"
                }`}
                id="unlocked-tab"
                data-tabs-target="#unlocked-tab"
                type="button"
                role="tab"
                aria-controls="unlocked-tab"
                aria-selected="false"
                onClick={() => {
                  setTabStatus("unlocked");
                  setActiveTab("unlocked");
                }}
              >
                Unlocked
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent ">
          {tabStatus === "locked" ? <ViewLocked /> : <ViewUnlocked />}
        </div>
      </div>
    </div>
  );
}

export default LockLiquidityTab;
