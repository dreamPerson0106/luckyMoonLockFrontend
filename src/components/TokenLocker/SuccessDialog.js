import React from "react";
import Dialog from "../Dialog";
import DialogContent from "../Dialog/DialogContent.js";
import { SuccesCheckLogo } from "../../assets/Icons";
import { useSelector } from "react-redux";

const SuccessDialog = ({ dialogStatus, close }) => {
  const { fontHolder, background } = useSelector((state) => state);
  return (
    <Dialog modalState={dialogStatus} closeModal={close}>
      <DialogContent
        className={`flex flex-col gap-3 border-y-[1px] rounded-lg text-center bg-[${background}] text-[${fontHolder}] p-10`}
      >
        <SuccesCheckLogo className="mx-auto" />
        <h2 className="text-[#1ECD84] text-5xl">Success.</h2>
        <p>Tokens loked! Locks are visible on your token page.</p>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
