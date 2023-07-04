import React from "react";
import { EthLogo, PadLockIcon } from "../../assets/Icons";
import { useSelector } from "react-redux";

function TokenTab() {
  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    border,
    button,
    hover,
    mainBg,
  } = useSelector((state) => state.theme);

  const { wallet_address } = useSelector((state) => state.web3);
  return (
    <div>
      <div
        className={`p-2 rounded-lg bg-[${background}] `}
        id="lock_liquidity"
        role="tabpanel"
        aria-labelledby="lock_liquidity-tab"
      >
        <button
          className={`mx-auto w-4/12 my-3 py-3 bg-[${button}] border-[1px] border-[${border}] rounded-lg btn_shadow flex justify-center items-center gap-2`}
        >
          <EthLogo className={`w-9 h-9`}></EthLogo>
          Goeli
        </button>
      </div>
      <p className={`text-lg border-l-0 text-[${font}] `}>Your Token Locks</p>
      <hr className={`bg-[${fontHolder}] mt-6`} />
      <div className="flex justify-between mt-4 mb-2">
        <div className="flex justify-between items-center gap-2">
          <EthLogo className={`w-9 h-9`} />
          <div>
            <p className="text-lg "> FLOKI / ETH</p>
            <p className="text-sm "> Liquidity : $5.82 M</p>
          </div>
        </div>
        <div className="text-right">
          <div className="items-center flex text-right justify-end gap-4">
            <p className="text-lg text-[#1ECD84]">$4.76M</p>
            <PadLockIcon
              color="#1ECD84"
              className=" w-7 h-7 items-center float-right"
            />
          </div>
          <div>
            <p className="text-sm ">81.8% - next in 263 years</p>
          </div>
        </div>
      </div>
      <hr className={`bg-[${fontHolder}] mt-6`} />
      <div className="flex justify-between mt-4 mb-2">
        <div className="flex justify-between items-center gap-2">
          <EthLogo className={`w-9 h-9`} />
          <div>
            <p className="text-lg "> FLOKI / ETH</p>
            <p className="text-sm "> Liquidity : $5.82 M</p>
          </div>
        </div>
        <div className="text-right">
          <div className="items-center flex text-right justify-end gap-4">
            <p className="text-lg text-[#1ECD84]">$4.76M</p>
            <PadLockIcon
              color="#1ECD84"
              className=" w-7 h-7 items-center float-right"
            />
          </div>
          <div>
            <p className="text-sm ">81.8% - next in 263 years</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenTab;
