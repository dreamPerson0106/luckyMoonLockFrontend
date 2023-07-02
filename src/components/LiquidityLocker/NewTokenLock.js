import React, { useState } from "react";
import { EthLogo, EthereumIcon } from "../../assets/Icons";
import { useSelector } from "react-redux";
import EditLock from "./EditLock";
import NewLockContents from "./NewLockContents";
import WalletConnectDialog from "../WalletConnectDialog";
import LiquidityLock from "./LiquidityLock";

const NewTokenLock = ({ innerLockStatus }) => {
  const {
    wallet_address,
    background,
    font,
    fontHolder,
    hover,
    border,
    backgroundHolder,
    mainBg,
  } = useSelector((state) => state);
  const [wallet_status, setWalletStatus] = useState(false);
  const [temp, setTemp] = useState(false);
  return (
    <div id="innerTabContent" className="p-3">
      <WalletConnectDialog
        modalState={wallet_status}
        closeModal={() => setWalletStatus(false)}
      />
      {innerLockStatus ? (
        temp ? (
          <LiquidityLock temp={() => setTemp(false)} />
        ) : (
          <div
            className={`p-4 rounded-lg bg-[${background}]`}
            id="newlock"
            role="tabpanel"
            aria-labelledby="newlock-tab"
          >
            <div className="flex gap-5 items-center mb-6 max-w-full">
              <EthLogo width={35} height={35} />
              <p className={`text-[${font}] font-bold text-lg`}>Sushiswap V1</p>
            </div>
            <p className="mb-6">
              Use the locker to prove to investors you have locked liquidity. If
              you are not a token developer, this section is almost definitely
              not for you.
            </p>
            <p>Our lockers offer</p>
            <ul
              className={`max-w-md space-y-1 text-[${fontHolder}] list-disc list-inside`}
            >
              <li>Lock splitting</li>
              <li>Liquidity Migration</li>
              <li>Relocking</li>
              <li>Lock ownership transfer</li>
            </ul>
            <NewLockContents temp={() => setTemp(true)} />
          </div>
        )
      ) : (
        <></>
      )}

      {!innerLockStatus ? (
        wallet_address === "" ? (
          <div
            className={`p-4 rounded-lg bg-[${background}]`}
            id="edit_withdraw"
            role="tabpanel"
            aria-labelledby="edit_withdraw-tab"
          >
            <p className={`text-sm font-medium text-[${font}]`}>
              Edit / Withdraw
            </p>
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
          <EditLock />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewTokenLock;
