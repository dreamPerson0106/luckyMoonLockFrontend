import React from "react";
import { useSelector } from "react-redux";
import { EthereumIcon, Setting } from "../../assets/Icons";

function LockedPanel() {
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

  return (
    <div>
      <p className={`text-[${font}]`}>Withdraw Liquidity</p>
      <p className={`text-[${fontHolder}] text-center`}>WETH / USDT</p>
      <p className={`text-[${fontHolder}] text-center`}>
        <span>0.536..97</span> - <span>Look page</span>
      </p>
      <div className={`my-6 bg-[${background} border-[1px] rounded-md`}>
        <div className="flex justify-between">
          <div>
            <p className={`mt-5 ml-5 text-[${font}]`}>0.03% UNLOCKED</p>
            <p className={`my-1 ml-5 text-[${fontHolder}]`}>
              0.000000000004568962
            </p>
          </div>
          <button className="mr-5">
            <Setting />
          </button>
        </div>
        <button
          id=""
          className={` my-6 w-[90%]  bg-green-600  ml-[5%] text-[${font}] text-center text-lg  hover:bg-green-400 focus:outline-none  font-medium rounded-lg px-4 py-2.5 items-center `}
          type="button"
        >
          Withdraw
        </button>
      </div>
      <div className={`my-6 bg-[${background} border-[1px] rounded-md`}>
        <div className="flex justify-between">
          <div>
            <p className={`mt-5 ml-5 text-[${font}]`}>0.03% UNLOCKED</p>
            <p className={`my-1 ml-5 text-[${fontHolder}]`}>
              0.000000000004568962
            </p>
          </div>
          <button className="mr-5">
            <Setting />
          </button>
        </div>
        <button
          id=""
          className={` my-6 w-[90%]  bg-green-600  ml-[5%] text-[${font}] text-center text-lg  hover:bg-green-400 focus:outline-none  font-medium rounded-lg px-4 py-2.5 items-center `}
          type="button"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default LockedPanel;
