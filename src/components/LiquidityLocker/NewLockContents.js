import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EthereumIcon } from "../../assets/Icons";
import IncreaseLock from "./modals/IncreaseLock";
import WalletConnectDialog from "../WalletConnectDialog";
import LiquidityLock from "./LiquidityLock";

function NewLockContents({ temp }) {
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
  const [wallet_status, setWalletStatus] = useState(false);

  const [tempModalStat, setTempModalStat] = useState(false);

  return wallet_address === "" ? (
    <div>
      <WalletConnectDialog
        modalState={wallet_status}
        closeModal={() => setWalletStatus(false)}
      />
      <div className="flex justify-center">
        <button
          type="button"
          className={`inline-block  py-2.5 px-5 mt-10 font-medium text-[${font}] bg-[${background} hover:bg-[${hover}] hover:text-[${fontHolder}]] rounded-lg border border-[${border}]-200 hover:bg-{${backgroundHolder}} hover:text-[${fontHolder}]`}
          onClick={() => setWalletStatus(true)}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div className="my-6">
        <label
          htmlFor="default-input"
          className={`block mb-2 text-sm text-[${font}]`}
        >
          Enter the sushiswap V1 - Goerli pair adderss youd like to lock
          liquidity for
        </label>
        <input
          type="text"
          id="default-input"
          placeholder="Lookymoon V2 – Goerli pair address…"
          className={` my-4 bg-[${mainBg}]  text-[${fontHolder}] text-sm rounded-lg  block w-full p-2.5`}
        />
      </div>
      <button
        id=""
        className={` mb-6 w-full justify-between text-[${fontHolder}] text-lg bg-[${backgroundHolder}] hover:bg-[${hover}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center `}
        type="button"
        onClick={() => {
          // temp();
          setTempModalStat(true);
        }}
      >
        <div className={`text-lg flex gap-2 items-center text-[${font}]`}>
          <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
          WETH / USDT
        </div>
        <p>0x563865....2356</p>
      </button>
      {tempModalStat ? (
        <IncreaseLock
          close={() => {
            setTempModalStat(false);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default NewLockContents;
