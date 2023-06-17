import React from "react";
import { useSelector } from "react-redux";
import "./tokenlocker.css";
import { Cryptologo, SearchLogo } from "../../assets/Icons";
import WalletConnectDialog from "../WalletConnectDialog";
import { useState } from "react";

const TokenLocker = () => {
  const {
    wallet_address,
    font,
    fontHolder,
    border,
    background,
    backgroundHolder,
    button,
  } = useSelector((state) => state);
  const [wallet_status, setWalletStatus] = useState(false);

  return (
    <div
      className={`w-full mx-auto max-w-xl text-[${font}] bg-[${background}] my-20 box border-[${border}]`}
    >
      <h1 className="text-3xl font-bold text-center my-3">Token Locker</h1>
      <p>
        Introducing Token vesting Locking Pools. Token locks are represented as
        shares of a pool, In a similar way to a lookymoon pool allowing all
        ERC20 tokens including Rebashing and Deflationary mechanishms to be
        supported.
      </p>
      <p className={`text-[${fontHolder}]`}>
        This means lock amounts may change due to decimal roundingm but you will
        always retain your share of the pool.
      </p>
      <p className="text-[#FFC350]">
        Do not lock Liquidity tokens here, they will not be shown in the
        LookyMoon browser, and will not be migrateable.
      </p>
      {wallet_address.length === 0 ? (
        <button
          className={`w-full my-3 py-4 bg-[${button}] border-[1px] border-[${border}] rounded-lg btn_shadow flex justify-center items-center gap-2`}
          onClick={() => setWalletStatus(true)}
        >
          <Cryptologo width={11} height={18} color={font} /> Connect your wallet
        </button>
      ) : (
        <div className="w-full relative z-0">
          <input
            type="search"
            className={`border-[1px] border-[${border}] bg-[${backgroundHolder}] w-full px-10 py-2 rounded-lg`}
            placeholder="Token address"
            onInput={(e) => console.log(e.target.value)}
          />
          <Cryptologo
            width={11}
            height={18}
            color={fontHolder}
            className={`absolute top-[28%] left-4`}
          />
          <SearchLogo color={fontHolder} className={`absolute top-2 right-2`} />
        </div>
      )}
      <WalletConnectDialog
        modalState={wallet_status}
        closeModal={() => setWalletStatus(false)}
      />
    </div>
  );
};

export default TokenLocker;
