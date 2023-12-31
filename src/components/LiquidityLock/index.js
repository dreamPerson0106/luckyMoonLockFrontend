import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { LockedLiquidityTokenIcon, EthLogo } from "../../assets/Icons";
import { Link } from "react-router-dom";
// import { useSyncExternalStoreWithSelector } from "use-sync-external-store/with-selector";
import { SwitchNetDialog, SwitchNetButton } from "../SwitchNet";

const LiqLock = () => {
  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    button,
    border,
    hover,
  } = useSelector((state) => state.theme);
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
        className={`grid grid-cols-6 gap-4  max-h-80 w-full max-w-xl p-4 text-gray-500 bg-[#FDF193] shadow rounded-2xl`}
        role="alert"
      >
        <div className=" justify-center flex-shrink-0 rounded-lg ">
          <LockedLiquidityTokenIcon width={"77"} height={"77"} />
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
        className={`max-w-xl p-3 mt-16 bg-[${background}]  border-[${border}] border-[1px] rounded-lg`}
        style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
      >
        <label className="block mb-2 text-base font-medium text-[#8C8C8C]">
          Selected Network
        </label>
        <SwitchNetButton
          className={`w-full justify-between text-[${fontHolder}] text-lg bg-[${button}] hover:bg-[${hover}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center border-[${border}] border-[1px]`}
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
        <label className="block mt-10 mb-2 text-base font-medium text-[#8C8C8C]">
          Lock Liquidity on which exchange?
        </label>
        <Link
          to="/sushi-v1/locker"
          className={`max-w-xl mb-5 flex items-center p-3 text-base font-bold text-[${fontHolder}] rounded-lg bg-[${backgroundHolder}] hover:bg-[${hover}] group hover:shadow`}
        >
          <EthLogo className={`w-9 h-9`} />
          <span className="flex-1 ml-3 whitespace-nowrap">LuckyMoon</span>
        </Link>
        <Link
          to="/sushi-v1/locker"
          className={`max-w-xl mb-5 flex items-center p-3 text-base font-bold text-[${fontHolder}] rounded-lg bg-[${backgroundHolder}] hover:bg-[${hover}] group hover:shadow`}
        >
          <EthLogo className={`w-9 h-9`} />
          <span className="flex-1 ml-3 whitespace-nowrap">Sushiswap V1</span>
        </Link>
      </div>
    </div>
  );
};

export default LiqLock;
