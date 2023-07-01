import React, { useEffect, useRef, useState } from "react";
import { EthLogo, OptionsIcon, PadLockIcon } from "../../assets/Icons";
import { useSelector } from "react-redux";
import SwitchNetDialog from "../SwitchNetDialog";

function ProfileTab() {
  const [selecterStatus, setSeleterStatus] = useState(false);

  const btnref = useRef(null);
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
          ref={btnref}
          onClick={() => setSeleterStatus(true)}
        >
          <EthLogo width={35} height={35}></EthLogo>
          Goeli
        </button>
        <SwitchNetDialog
          modalState={selecterStatus}
          closeModal={() => setSeleterStatus(false)}
          btnref={btnref}
        />
      </div>
      <p className={`text-lg border-l-0 text-[${font}]`}>Your Token Locks</p>
      <button
        type="button"
        className={`inline-block  py-2.5 pl-3 pr-5 mt-5 font-medium text-[${font}] bg-[${button} hover:bg-[${hover}] hover:text-[${fontHolder}]] rounded-lg border-[1px] border-[${border}] hover:bg-{${backgroundHolder}} hover:text-[${fontHolder}]`}
      >
        &#8592; Back
      </button>
      <p className={`mt-5 text-lg border-l-0 text-[${fontHolder}]`}>
        🤔 Your Vested <span className={`text-[${font}]`}>USDC</span>
      </p>
      <p className={`my-3 text-lg border-l-0 text-[${fontHolder}]`}>
        Your Balance: 0.000897
      </p>
      <hr className={`bg-[${fontHolder}]`} />
      <div className="flex justify-between items-center my-5">
        <p className={`text-lg text-[${font}]`}>1/2 Locks</p>
        <button
          type="button"
          className={`flex gap-2 inline-block  py-2.5 pl-3 pr-5 font-medium text-[${font}] bg-[${button} hover:bg-[${hover}] hover:text-[${fontHolder}]] rounded-lg border border-[${border}] hover:bg-{${backgroundHolder}} hover:text-[${fontHolder}] items-center`}
        >
          Filter <PadLockIcon color={font} />
          <PadLockIcon color="#1ECD84" />
        </button>
      </div>
      <hr className={`bg-[${fontHolder}]`} />
      <div className="flex justify-between items-center my-5">
        <p className={`text-md text-[${fontHolder}]`}>Amount</p>
        <p className={`text-md text-[${fontHolder}]`}>Unlock Date</p>
      </div>
      <hr className={`bg-[${fontHolder}]`} />
      <div className="flex justify-between items-center my-5">
        <p className={`flex gap-2 items-center text-md text-[${font}]`}>
          <PadLockIcon color="#7C86AF" /> 0.0001 USDC
        </p>
        <p className={`flex gap-2 items-center text-md text-[${font}]`}>
          10 minutes ago <OptionsIcon color="#1ECD84" width={25} height={25} />
        </p>
      </div>
      <hr className={`bg-[${fontHolder}]`} />
      <div className="items-center my-5">
        <p className={`text-md text-[${fontHolder}]`}>Lock id: 782</p>
        <p className={`text-md text-[${fontHolder}]`}>
          Owner: {wallet_address}
        </p>
        <p className={`text-md text-[${fontHolder}]`}>
          Unlock Date: 16 June 2023, 07:52
        </p>
      </div>
    </div>
  );
}

export default ProfileTab;
