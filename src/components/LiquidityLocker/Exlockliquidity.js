import React, { useState } from "react";
import { useSelector } from "react-redux";
import Profileliquidity from "./Profileliquidity";

function Exlockliquidity() {
  const { font, fontHolder, border, background, hover } = useSelector(
    (state) => state.theme
  );
  const [tokenViewStatus, setTokenViewStatus] = useState(true);
  return (
    <div
      id="myTabContent "
      className={`mx-auto max-w-xl bg-[${background}] border-[${border}] border-[1px] rounded-xl mb-16`}
      style={{
        boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)",
      }}
    >
      <div
        className="p-4 rounded-lg"
        id="tokens"
        role="tabpanel"
        aria-labelledby="tokens-tab"
      >
        <div className={`mb-4  text-[${font}`}></div>
      </div>
      <Profileliquidity tokenViewStatus={tokenViewStatus}></Profileliquidity>
    </div>
  );
}

export default Exlockliquidity;
