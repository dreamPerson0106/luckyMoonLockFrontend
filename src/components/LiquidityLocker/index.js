import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { EthereumIcon } from "../../assets/Icons";
import LiquidityLock from "./LiquidityLock";
import "./tokenlocker.css";

const LiquidityLocker = () => {
  const { font, fontHolder, background, backgroundHolder } = useSelector(
    (state) => state
  );
  const [selecterStatus, setSeleterStatus] = useState(false);
  const ref = useRef();
  const btnref = useRef();

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        btnref.current &&
        !btnref.current.contains(event.target)
      ) {
        // Clicked outside the div
        setSeleterStatus(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref]);
  return (
    <div className=" container mx-auto pt-28 pb-7 text-white max-w-xl">
      <div className="relative">
        <button
          id="dropdownDividerButton"
          data-dropdown-toggle="dropdownDivider"
          className={`w-full justify-between text-[${fontHolder}] text-lg bg-[${backgroundHolder}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center `}
          type="button"
          ref={btnref}
          onClick={() => {
            setSeleterStatus(!selecterStatus);
          }}
        >
          <div className="flex gap-2 items-center">
            <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
            Ethereum
          </div>
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {selecterStatus ? (
          <div
            id="dropdownDivider"
            ref={ref}
            className="z-10 w-full bg-white divide-y divide-gray-100 rounded-lg shadow max-w-xl absolute top-14 left-0"
          >
            <ul
              className="py-2 text-black font-bold text-lg"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="#"
                  className={` flex gap-2 items-center block px-4 py-2 hover:bg-[${backgroundHolder}]`}
                >
                  <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex gap-2 items-center block px-4 py-2 hover:bg-[${backgroundHolder}]`}
                >
                  <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex gap-2 items-center block px-4 py-2 hover:bg-[${backgroundHolder}]`}
                >
                  <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
                  Earnings
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="mb-4 mt-10 border-b border-gray-200">
        <ul
          className="flex flex-wrap -mb-px text-lg font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="tokens-tab"
              data-tabs-target="#tokens"
              type="button"
              role="tab"
              aria-controls="tokens"
              aria-selected="false"
            >
              Tokens
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="lock_liquidity-tab"
              data-tabs-target="#lock_liquidity"
              type="button"
              role="tab"
              aria-controls="lock_liquidity"
              aria-selected="false"
            >
              Lock Liquidity
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="launchpad-tab"
              data-tabs-target="#launchpad"
              type="button"
              role="tab"
              aria-controls="launchpad"
              aria-selected="false"
            >
              Launchpad
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="tokens"
          role="tabpanel"
          aria-labelledby="tokens-tab"
        >
          <LiquidityLock />
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="lock_liquidity"
          role="tabpanel"
          aria-labelledby="lock_liquidity-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Lock Liquidity tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="launchpad"
          role="tabpanel"
          aria-labelledby="launchpad-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">
              Launchpad tab's associated content
            </strong>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiquidityLocker;
