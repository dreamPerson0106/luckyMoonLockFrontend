import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SwitchNetButton, SwitchNetDialog } from "../SwitchNet";
import { useSelector } from "react-redux";
import PagewithTransition from "../Layout/PagewithTransition";

function Extop() {
  const [selecterStatus, setSeleterStatus] = useState(false);
  const { font, fontHolder, border, background, hover } = useSelector(
    (state) => state.theme
  );

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
    <div>
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
          >
            <li className="mr-2" role="presentation">
              <Link
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[${font}] hover:text-[${fontHolder}]`}
                to="/sushi-v1/ex-token"
                onClick={() => {
                  // setTokenTab(true);
                  // setLaunchPadTab(false);
                  // setLiquidityTab(false);
                }}
              >
                Tokens
              </Link>
            </li>
            <li className="mr-2" role="presentation">
              <Link
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[${font}] hover:text-[${fontHolder}]`}
                to="/sushi-v1/ex-lockliquidity"
                onClick={() => {
                  // setTokenTab(false);
                  // setLaunchPadTab(false);
                  // setLiquidityTab(true);
                }}
              >
                Lock Liquidity
              </Link>
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
                  // setTokenTab(false);
                  // setLaunchPadTab(true);
                  // setLiquidityTab(false);
                }}
                disabled
              >
                Launchpad
              </button>
            </li>
          </ul>
        </div>
      </div>
      <PagewithTransition />
      <Outlet />
    </div>
  );
}

export default Extop;
