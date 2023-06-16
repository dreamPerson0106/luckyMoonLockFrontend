import React from "react";
import { useDispatch, useSelector } from "react-redux";

function DialogHeader({ children, close }) {
  const { font, background, backgroundHolder, border } = useSelector(
    (state) => state
  );

  return (
    <div
      className={`text-[${font}] bg-[${background}] px-6 py-2 border-t-[1px] border-[${border}] rounded-t-lg`}
    >
      {children}
    </div>
  );
}

export default DialogHeader;
