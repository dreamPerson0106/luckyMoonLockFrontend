import React, { useState } from "react";
import Dialog from "../Dialog";
import DialogHeader from "../Dialog/DialogHeader.js";
import DialogContent from "../Dialog/DialogContent.js";
import { EthereumLoadingLogo, SuccessLog } from "../../assets/Icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuccessDialog = ({ dialogStatus, close }) => {
  const { font, fontHolder, background, border } = useSelector(
    (state) => state
  );
  const [success_status, setSuccessStatus] = useState(false);
  return (
    <Dialog modalState={dialogStatus} closeModal={close}>
      <DialogContent
        className={`flex flex-col gap-3 border-y-[1px] rounded-lg text-center bg-[${background}] text-[${fontHolder}] p-10`}
      >
        {!success_status ? (
          <>
            <div className="relative w-[120px] mx-auto">
              <EthereumLoadingLogo />
              <span className={`loader`} />
            </div>
            <p className={`text-[${font}]`}>
              Confirm this transaction in your wallet
            </p>
            <p>Using a mobile wallet</p>
            <p>
              Sometimes it helps close the mobile app and restart it. If the
              transaction is not shown in the wallet.
            </p>
            <button
              onClick={() => {
                setSuccessStatus(true);
              }}
            >
              {"->"}
            </button>
          </>
        ) : (
          <>
            <SuccessLog className="mx-auto" />
            <h2 className="text-[#1ECD84] text-4xl">Success.</h2>
            <p>LP Tokens Locked</p>
            <p>
              This will be visible with our browser list within 15 mins. Thanks
              you for using our locker. Best of luch with your project!
            </p>
            <p>
              Please stay tuned for new services we will offer ERC20 projects.
            </p>
            <Link
              to={"/tokenLocker"}
              className={`bg-[#1ECD84] py-4 rounded-md text-xl text-[#e3e9f1] w-full max-w-md mx-auto my-4`}
            >
              View lock page
            </Link>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
