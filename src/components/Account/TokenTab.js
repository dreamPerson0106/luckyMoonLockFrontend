import React from "react";
import { EthLogo, EthereumIcon, PadLockIcon } from "../../assets/Icons";
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
    wallet_address,
    mainBg,
  } = useSelector((state) => state);
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
          <EthLogo width={35} height={35}></EthLogo>
          Goeli
        </button>
      </div>
      <p className={`text-lg border-l-0 text-[${font}]`}>Your Token Locks</p>
      <hr className={`bg-[${fontHolder}]`} />
      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-2">
          <EthereumIcon width={35} height={35}></EthereumIcon>
          <div>
            <p className="text-lg "> FLOKI/ETH</p>
            <p className="text-sm "> Liquidity : $5.82 M</p>
          </div>
        </div>
        <div className="text-right">
          <div className="items-center">
            <p>$4.76M</p>
            <PadLockIcon
              color="#1ECD84"
              className="  items-center float-right"
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
