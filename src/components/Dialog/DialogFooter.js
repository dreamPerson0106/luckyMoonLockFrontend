import React from "react";
import { useSelector } from "react-redux";

const DialogFooter = ({ children }) => {
  const { font, background, backgroundHolder, border } = useSelector(
    (state) => state
  );
  return (
    <div
      className={` bg-[${backgroundHolder}] rounded-b-lg py-3 border-b-[1px] border-x-[1px] border-[${border}] border-x-[1px]`}
      style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
    >
      {children}
    </div>
  );
};

export default DialogFooter;
