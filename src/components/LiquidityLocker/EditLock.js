import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EthereumIcon } from "../../assets/Icons";
import LockedPanel from "./LockedPanel";

function EditLock() {
  const {
    wallet_address,
    background,
    font,
    fontHolder,
    backgroundHolder,
    mainBg,
    hover,
    border,
  } = useSelector((state) => state);

  const [panelStatus, setPanelStatus] = useState(false);

  return !panelStatus ? (
    <div className="p-4">
      <p
        className={`text-sm font-medium text-[${font}] dark:text-[${fontHolder}]`}
      >
        Edit / Withdraw
      </p>
      <p className={` mt-5 text-[${font}] text-medium`}>
        Enter the Lookymoon V2 – Goerli pair address youd like to access
      </p>
      <div className="mb-6">
        <input
          type="text"
          id="default-input"
          placeholder="Lookymoon V2 – Goerli pair address…"
          className={` my-4 bg-[${mainBg}]  text-[${fontHolder}] text-sm rounded-lg  block w-full p-2.5`}
        />
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm text-gray-900 dark:text-white"
        >
          e.g. 0xc70556952asdfasd2sfsdf5sdf5sdfsdfsd4fsd6fsdfsd
        </label>
      </div>
      <button
        id=""
        className={` mb-6 w-full justify-between text-[${fontHolder}] text-lg bg-[${backgroundHolder}] hover:bg-[${hover}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center `}
        type="button"
        onClick={() => {
          setPanelStatus(true);
        }}
      >
        <div className={`text-lg flex gap-2 items-center text-[${font}]`}>
          <EthereumIcon width={"35"} height={"35"}></EthereumIcon>
          WETH / USDT
        </div>
        <p>0x563865....2356</p>
      </button>
    </div>
  ) : (
    <LockedPanel />
  );
}

export default EditLock;
