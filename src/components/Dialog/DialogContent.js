import React from "react";
import { useSelector } from "react-redux";

const DialogContent = ({ children, className }) => {
  const { border } = useSelector((state) => state.theme);
  return (
    <div
      className={`border-x-[1px] border-[${border}] ${className}`}
      style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
    >
      {children}
    </div>
  );
};

export default DialogContent;
