import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./tokenlocker.css";
import { PadLockIcon } from "../../assets/Icons";

import NewTokenLocker from "./NewTokenLocker";
import ViewTokenLocker from "./ViewTokenLocker";

const TokenLocks = ({ className, token_Address }) => {
  const { font, fontHolder, border } = useSelector((state) => state.theme);
  const [lock, setLock] = useState(true);

  return (
    <div
      className={`w-full mx-auto max-w-xl text-[${
        lock ? font : fontHolder
      }]  my-20 ${className}`}
    >
      <div className="flex gap-10 mb-3">
        <button
          className={`flex px-2 gap-2 ${
            lock ? `border-b-[1px]` : `hover:border-b-[1px]`
          } hover:border-[${border}] cursor-pointer`}
          onClick={() => {
            setLock(true);
          }}
        >
          <PadLockIcon color={font} />
          New Lock
        </button>
        <button
          className={`text-[${!lock ? font : fontHolder}] flex px-2 gap-2 ${
            !lock ? `border-b-[1px]` : `hover:border-b-[1px]`
          } cursor-pointer hover:text-[${font}]`}
          onClick={() => {
            setLock(false);
          }}
        >
          <PadLockIcon color={fontHolder} />
          View Locks
        </button>
      </div>
      {lock ? (
        <NewTokenLocker token_Address={token_Address} />
      ) : (
        <ViewTokenLocker token_address={token_Address} />
      )}
    </div>
  );
};

export default TokenLocks;
