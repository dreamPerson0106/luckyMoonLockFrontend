import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GroupLogo, EthereumIcon } from "../../assets/Icons";
import { Link } from "react-router-dom";
import { useSyncExternalStoreWithSelector } from "use-sync-external-store/with-selector";

const LiqLock = () => {
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
    <div
      className=" container mx-auto pt-28 pb-7 text-white max-w-xl
    "
    >
      <div
        id="toast-default"
        className={`grid grid-cols-6 gap-4  max-h-80 w-full max-w-xl p-4 text-gray-500 bg-[#FDF193] shadow`}
        role="alert"
      >
        <div className=" justify-center flex-shrink-0 rounded-lg ">
          <GroupLogo width={"77"} height={"77"}></GroupLogo>
        </div>
        <div className="col-span-5">
          <h6 className="text-2xl text-[#121C44]  font-bold">
            $213.06M liquidity locked
          </h6>

          <p className="text-sm font-normal mt-2">
            View our Liquidity Locker TVL on Defi Llama
          </p>
        </div>
      </div>

      <h1
        className={`mt-10 text-4xl text-center font-extrabold leading-none tracking-tight text-[${font}] md:text-5xl lg:text-6x`}
      >
        Lock Liquidity
      </h1>

      <div
        className={`max-w-xl p-3 mt-16 bg-[${background}] border-[${backgroundHolder}] border-[1px] rounded-lg`}
        style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
      >
        <label className="block mb-2 text-base font-medium text-[#8C8C8C]">
          Selected Network
        </label>
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
        <label className="block mt-10 mb-2 text-base font-medium text-[#8C8C8C]">
          Lock Liquidity on which exchange?
        </label>
        <Link
          href="#"
          className={`max-w-xl mb-5 flex items-center p-3 text-base font-bold text-[${fontHolder}] rounded-lg bg-[${backgroundHolder}] hover:bg-gray-100 group hover:shadow`}
        >
          <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
          <span className="flex-1 ml-3 whitespace-nowrap">LuckyMoon</span>
        </Link>
        <Link
          href="#"
          className={`max-w-xl mb-5 flex items-center p-3 text-base font-bold text-[${fontHolder}] rounded-lg bg-[${backgroundHolder}] hover:bg-gray-100 group hover:shadow`}
        >
          <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
          <span className="flex-1 ml-3 whitespace-nowrap">Sushiswap V1</span>
        </Link>
      </div>
    </div>
  );
};

export default LiqLock;
