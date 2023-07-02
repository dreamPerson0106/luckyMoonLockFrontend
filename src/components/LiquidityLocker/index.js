import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import LockedPanel from "./LockedPanel";
import NewTokenLock from "./NewTokenLock";
import SwitchNetDialog from "../SwitchNet/SwitchNetDialog";
import { SwitchNetButton } from "../SwitchNet";

const LiquidityLocker = () => {
  const [tokenTab, setTokenTab] = useState(true);
  const [liquidityTab, setLiquidityTab] = useState(false);
  const [launchpadTab, setLaunchPadTab] = useState(false);
  const [innerLockStatus, setInnerLockStatus] = useState(true);
  const [selecterStatus, setSeleterStatus] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const { font, fontHolder, background, hover } = useSelector((state) => state);

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
      <SwitchNetButton
        className={`bg-[${background}] w-full justify-between text-[${fontHolder}] text-lg hover:bg-[${hover}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center `}
        state={() => {
          setSeleterStatus(!selecterStatus);
        }}
        ref={btnref}
      />
      <SwitchNetDialog
        modalState={selecterStatus}
        closeModal={() => setSeleterStatus(false)}
        btnref={btnref}
      />

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
                      className={`inline-block p-4  border-[${font}]-700 rounded-t-lg hover:text-[${fontHolder}]  ${
                        activeTab === 0 && "border-b-4 "
                      }`}
                      id="newlock-tab"
                      data-tabs-target="#lock"
                      type="button"
                      role="tab"
                      aria-controls="newlock"
                      aria-selected="true"
                      onClick={() => {
                        setInnerLockStatus(true);
                        setActiveTab(0);
                      }}
                    >
                      New Lock
                    </button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button
                      className={`inline-block p-4  border-[${font}]-700 rounded-t-lg hover:text-[${fontHolder}]  ${
                        activeTab === 1 && "border-b-4 "
                      }`}
                      id="edit_withdraw-tab"
                      data-tabs-target="#edit_withdraw"
                      type="button"
                      role="tab"
                      aria-controls="edit_withdraw"
                      aria-selected="false"
                      onClick={() => {
                        setInnerLockStatus(false);
                        setActiveTab(1);
                      }}
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
