import React, { useState } from "react";
import { useSelector } from "react-redux";
import WalletConnectDialog from "../WalletConnectDialog";
import SearchResult from "./SearchResult";

function NewLockContents({ temp }) {
  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    border,
    hover,
    mainBg,
  } = useSelector((state) => state.theme);
  const [wallet_status, setWalletStatus] = useState(false);

  const [searchQuery, setsearchQuery] = useState("");
  const { wallet_address } = useSelector((state) => state.web3);

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
          className={` mt-4 bg-[${mainBg}]  text-[${fontHolder}] text-sm rounded-lg  block w-full p-2.5 bg-[${backgroundHolder}]`}
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        {searchQuery.length === 42 ? (
          <SearchResult pairAddress={searchQuery} temp={temp} />
        ) : (
          <p className={`text-green-500 text-center text-xs mb-4`}>
            Address length must be 42.
          </p>
        )}
      </div>
    </div>
  );
}

export default NewLockContents;
