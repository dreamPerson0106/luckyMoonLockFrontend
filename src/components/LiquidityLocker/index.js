import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { EthereumIcon } from "../../assets/Icons";
import LockedPanel from "./LockedPanel";
import NewTokenLock from "./NewTokenLock";

const LiquidityLocker = () => {
  const [tokenTab, setTokenTab] = useState(true);
  const [liquidityTab, setLiquidityTab] = useState(false);
  const [launchpadTab, setLaunchPadTab] = useState(false);
  const [innerLockStatus, setInnerLockStatus] = useState(true);
  const [selecterStatus, setSeleterStatus] = useState(false);

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
  } = useSelector((state) => state);

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
    <div className={`container mx-auto pt-10 pb-7 text-[${font}] max-w-xl`}>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className={`w-full justify-between text-[${fontHolder}] text-lg bg-[${background}] hover:bg-[${hover}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5  inline-flex items-center `}
        type="button"
        ref={btnref}
        onClick={() => {
          setSeleterStatus(!selecterStatus);
        }}
      >
        <div className={`text-lg flex gap-2 items-center text-[${font}]`}>
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
      <div className="relative">
        {selecterStatus ? (
          <div
            id="dropdownDivider"
            ref={ref}
            className={` w-full bg-[${background}] divide-y divide-gray-100 rounded-lg shadow max-w-xl z-10 absolute top-0 left-0`}
          >
            <ul
              className={`py-2 text-[${font}] font-bold text-lg`}
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="#"
                  className={`flex gap-2 items-center block px-4 py-2 hover:bg-[${hover}]`}
                >
                  <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex gap-2 items-center block px-4 py-2 hover:bg-[${hover}]`}
                >
                  <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex gap-2 items-center block px-4 py-2 hover:bg-[${hover}]`}
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

      <div className="mb-4 mt-10">
        <ul
          className={`flex justify-between flex-wrap -mb-px text-lg font-medium text-center`}
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[${font}] hover:text-[${fontHolder}]`}
              id="tokens-tab"
              data-tabs-target="#tokens"
              type="button"
              role="tab"
              aria-controls="tokens"
              aria-selected="false"
              onClick={() => {
                setTokenTab(true);
                setLaunchPadTab(false);
                setLiquidityTab(false);
              }}
            >
              Tokens
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[${font}] hover:text-[${fontHolder}]`}
              id="lock_liquidity-tab"
              data-tabs-target="#lock_liquidity"
              type="button"
              role="tab"
              aria-controls="lock_liquidity"
              aria-selected="false"
              onClick={() => {
                setTokenTab(false);
                setLaunchPadTab(false);
                setLiquidityTab(true);
              }}
            >
              Lock Liquidity
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[${font}] hover:text-[${fontHolder}]`}
              id="launchpad-tab"
              data-tabs-target="#launchpad"
              type="button"
              role="tab"
              aria-controls="launchpad"
              aria-selected="false"
              onClick={() => {
                setTokenTab(false);
                setLaunchPadTab(true);
                setLiquidityTab(false);
              }}
              disabled
            >
              Launchpad
            </button>
          </li>
        </ul>
      </div>
      <div
        id="myTabContent "
        className={`bg-[${background}] rounded-lg`}
        style={{
          boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)",
        }}
      >
        {tokenTab ? (
          <>
            <div
              className="p-4 rounded-lg"
              id="tokens"
              role="tabpanel"
              aria-labelledby="tokens-tab"
            >
              <div className="mb-4 border-b border-gray-200">
                <ul
                  className="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="myTab"
                  data-tabs-toggle="#innerTabContent"
                  role="tablist"
                >
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[${fontHolder}] hover:border-[${font}]`}
                      id="newlock-tab"
                      data-tabs-target="#lock"
                      type="button"
                      role="tab"
                      aria-controls="newlock"
                      aria-selected="true"
                      onClick={() => setInnerLockStatus(true)}
                    >
                      New Lock
                    </button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[${fontHolder}] hover:border-[${font}]`}
                      id="edit_withdraw-tab"
                      data-tabs-target="#edit_withdraw"
                      type="button"
                      role="tab"
                      aria-controls="edit_withdraw"
                      aria-selected="false"
                      onClick={() => setInnerLockStatus(false)}
                    >
                      Edit / Withdraw
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <NewTokenLock innerLockStatus={innerLockStatus} />
          </>
        ) : (
          <></>
        )}
        {liquidityTab ? (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
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
        ) : (
          <></>
        )}
        {launchpadTab ? (
          <div
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LiquidityLocker;
