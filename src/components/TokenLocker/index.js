import React from "react";
import { useSelector } from "react-redux";
import "./tokenlocker.css";
import { Cryptologo, SearchLogo } from "../../assets/Icons";
import WalletConnectDialog from "../WalletConnectDialog";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [search_token, setSearchToken] = useState(null);

  return (
    <div
      className={`w-full mx-auto max-w-xl text-[${font}] bg-[${background}] my-20 box border-[${border}]`}
    >
      <h1 className="text-3xl font-bold text-center my-3">Token Locker</h1>
      <p className="text-[#3F2800]">
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
        <>
          <div className="w-full relative z-0">
            <input
              type="search"
              className={`border-[1px] border-[${border}] bg-[${backgroundHolder}] w-full px-10 py-2 rounded-lg`}
              placeholder="Token address"
              onChange={(e) => setSearchToken(e.target.value)}
              value={search_token}
            />
            <Cryptologo
              width={11}
              height={18}
              color={fontHolder}
              className={`absolute top-[28%] left-4`}
            />
            <SearchLogo
              color={fontHolder}
              className={`absolute top-2 right-2`}
            />
          </div>
          {search_token && (
            <div className={`border-[${border}] w-full p-5 text-center`}>
              <div className="flex justify-between ">
                <p>🤔USDC / USD Coin</p> <p>6 decimals</p>
              </div>
              <p className={`text-[${fontHolder}]`}>Your balance</p>
              <h3 className="text-2xl">0.001 USDC</h3>
              <Link to="lock">{"->"}</Link>
            </div>
          )}
        </>
      )}
      <WalletConnectDialog
        modalState={wallet_status}
        closeModal={() => setWalletStatus(false)}
      />
    </div>
  );
};

export default TokenLocker;
