import React from "react";
import { useDispatch, useSelector } from "react-redux";

function DialogHeader({ children, close }) {
  const { font, background, backgroundHolder, border } = useSelector(
    (state) => state
  );

  return (
    <div
      className={`text-[${font}] bg-[${backgroundHolder}] px-6 py-2 border-t-[1px] border-x-[1px] border-[${border}] border-x-[1px] rounded-t-lg`}
      style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
    >
      {children}
    </div>
  );
}

export default DialogHeader;
