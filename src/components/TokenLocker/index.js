import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./tokenlocker.css";
import { Cryptologo, SearchLogo } from "../../assets/Icons";
import WalletConnectDialog from "../WalletConnectDialog";
import { useState } from "react";
import Loading from "../Layout/Loading";
import { BigNumber, ethers } from "ethers";
import { TokenABI } from "../../assets/ABIs";
import { toast } from "react-toastify";
import NewTokenLocker from "./NewTokenLocker";
import TokenLocks from "./TokenLocks";

const TokenLocker = () => {
  const { font, fontHolder, border, background, backgroundHolder, button } =
    useSelector((state) => state.theme);
  const [wallet_status, setWalletStatus] = useState(false);
  const [search_token, setSearchToken] = useState("");
  const { wallet_address } = useSelector((state) => state.web3);
  const [tokenState, setTokenState] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(null);
    async function getTokenInfo() {
      const { ethereum } = window;
      if (ethereum) {
        if (search_token.length === 42) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const tokenInstance = new ethers.Contract(
            search_token,
            TokenABI,
            provider
          );
          const balanceOf = await tokenInstance.balanceOf(wallet_address);
          const symbol = await tokenInstance.symbol();
          const name = await tokenInstance.name();
          const decimals = await tokenInstance.decimals();
          setToken({
            symbol,
            name,
            balanceOf: ethers.utils.formatUnits(balanceOf, decimals).toString(),
            decimals: BigNumber.from(decimals).toNumber(),
          });
        }
      } else {
        toast.error("Metamask is not detected!");
      }
    }
    getTokenInfo();
    return () => {};
  }, [search_token, wallet_address]);

  console.log(tokenState);

  return (
    <>
      <div
        className={`w-full mx-auto max-w-xl text-[${font}] bg-[${background}] my-20 box border-[${border}] ${
          !tokenState ? " animate-slideUpEnter flex flex-col" : " hidden"
        }`}
      >
        <h1 className="text-3xl font-bold text-center my-3">Token Locker</h1>
        <p className="text-[#3F2800]">
          Introducing Token vesting Locking Pools. Token locks are represented
          as shares of a pool, In a similar way to a lookymoon pool allowing all
          ERC20 tokens including Rebashing and Deflationary mechanishms to be
          supported.
        </p>
        <p className={`text-[${fontHolder}]`}>
          This means lock amounts may change due to decimal roundingm but you
          will always retain your share of the pool.
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
            <Cryptologo className={`w-3 h-5 fill-[${font}]`} /> Connect your
            wallet
          </button>
        ) : (
          <>
            <div className="w-full relative z-0">
              <input
                type="text"
                className={`border-[1px] border-[${border}] bg-[${backgroundHolder}] w-full px-10 py-2 rounded-lg`}
                placeholder="Token address"
                onChange={(e) => setSearchToken(e.target.value)}
                value={search_token}
              />
              <Cryptologo
                className={`absolute top-[16%] left-4 fill-[${fontHolder}] w-3 h-5`}
              />
              <SearchLogo
                color={fontHolder}
                className={`absolute top-2 right-2`}
              />
              <p className={`text-[${fontHolder}] text-center text-xs mt-2`}>
                Input over 3 letters of the wallet address{" "}
              </p>
            </div>
            {search_token.length === 42 && token ? (
              <button
                className={`hover:bg-[${backgroundHolder}]`}
                onClick={() => {
                  setTokenState(true);
                }}
              >
                <div
                  className={`border-[${border}] w-full p-5 text-center border-[1px] rounded-md hover:bg-[${backgroundHolder}]`}
                >
                  <div className="flex justify-between ">
                    <p>
                      🤔 {token.symbol} / {token.name}
                    </p>
                    <p>{token.decimals} decimals</p>
                  </div>
                  <p className={`text-[${fontHolder}]`}>Your balance</p>
                  <h3 className="text-2xl">
                    {token.balanceOf.slice(0, 6)} {token.symbol}
                  </h3>
                </div>
              </button>
            ) : search_token.length >= 1 ? (
              <Loading
                text={search_token.length === 42 ? "Searching" : "Typing"}
                className="slideUpEnter"
                style={{ minHeight: "100px" }}
              />
            ) : (
              <></>
            )}
          </>
        )}
        <WalletConnectDialog
          modalState={wallet_status}
          closeModal={() => setWalletStatus(false)}
        />
      </div>
      <TokenLocks className={tokenState ? "animate-slideUpEnter" : "hidden"} />
    </>
  );
};

export default TokenLocker;
