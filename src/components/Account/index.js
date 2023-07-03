import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ProfileuserIcon } from "../../assets/Icons.js";
import ProfileTab from "./ProfileTab.js";
import TokenTab from "./TokenTab.js";

function Account() {
  const [tabHandler, setTabHandler] = useState("profile");

  const [selecterStatus, setSeleterStatus] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    border,
    button,
    hover,
    wallet_address,
    conv_address,
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
      <div className="w-full items-center text-center">
        <p className={` mx-auto text-[${fontHolder}] text-lg font-bold`}>
          Your Account
        </p>
        <div className={"flex justify-center"}>
          {wallet_address ? (
            <div className="flex gap-3 font-bold">
              <ProfileuserIcon className={`w-6 h-6 fill-[#bbb]`} />
              {conv_address}
            </div>
          ) : (
            <></>
          )}
        </div>
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
                setTabHandler("profile");
              }}
            >
              Profile
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
                setTabHandler("token");
              }}
            >
              Token Locks
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
                setTabHandler("liquidity");
              }}
            >
              Liquidity Locks
            </button>
          </li>
        </ul>
      </div>
      <div
        id="myTabContent "
        className={`bg-[${background}] rounded-lg p-4`}
        style={{
          boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)",
        }}
      >
        {tabHandler === "profile" ? <ProfileTab /> : <></>}
        {tabHandler === "token" ? <TokenTab /> : <></>}
        {tabHandler === "liquidity" ? <ProfileTab /> : <></>}
      </div>
    </div>
  );
}

export default Account;
