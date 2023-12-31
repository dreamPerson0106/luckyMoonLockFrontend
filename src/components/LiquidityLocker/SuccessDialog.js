import React, { useState } from "react";
import Dialog from "../Dialog";
import DialogContent from "../Dialog/DialogContent.js";
import { EthereumLoadingLogo, SuccessLog } from "../../assets/Icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./tokenlocker.css";

const SuccessDialog = ({ dialogStatus, close, state }) => {
  const { font, fontHolder, background } = useSelector((state) => state.theme);
  const [success_status, setSuccessStatus] = useState(false);
  return (
    <Dialog modalState={dialogStatus} closeModal={close}>
      <DialogContent
        className={`flex flex-col gap-3 border-y-[1px] rounded-lg text-center bg-[${background}] text-[${fontHolder}] p-10`}
      >
        {!state ? (
          <>
            <div className="relative w-[120px] mx-auto">
              <EthereumLoadingLogo className={`w-28 h-28 relative`} />
              <span
                className={`token_loader text-slat`}
                style={{
                  borderBottomColor:
                    "rgb(148 163 184 / var(--tw-text-opacity))",
                }}
              />
            </div>
            <p className={`text-[${font}]`}>
              Confirm this transaction in your wallet
            </p>
            <p>Using a mobile wallet</p>
            <p>
              Sometimes it helps close the mobile app and restart it. If the
              transaction is not shown in the wallet.
            </p>
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
