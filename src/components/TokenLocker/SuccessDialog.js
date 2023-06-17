import React, { useState } from "react";
import Dialog from "../Dialog";
import DialogHeader from "../Dialog/DialogHeader.js";
import DialogContent from "../Dialog/DialogContent.js";
import { SuccesCheckLogo } from "../../assets/Icons";
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
        <SuccesCheckLogo className="mx-auto" />
        <h2 className="text-[#1ECD84] text-5xl">Success.</h2>
        <p>Tokens loked! Locks are visible on your token page.</p>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
