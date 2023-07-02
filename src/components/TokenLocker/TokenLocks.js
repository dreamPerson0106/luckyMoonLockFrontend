import React from "react";
import { useSelector } from "react-redux";
import "./tokenlocker.css";
import { PadLockIcon } from "../../assets/Icons";
import { Link, useParams } from "react-router-dom";
import NewTokenLocker from "./NewTokenLocker";
import ViewTokenLocker from "./ViewTokenLocker";

const TokenLocks = () => {
  const { lock } = useParams();

  const { font, fontHolder, border } = useSelector((state) => state);

  return (
    <div
      className={`w-full mx-auto max-w-xl text-[${
        lock === "lock" ? font : fontHolder
      }]  my-20 `}
    >
      <div className="flex gap-10 mb-3">
        <Link
          to={`/tokenlocker/lock`}
          className={`flex px-2 gap-2 ${
            lock === "lock" ? `border-b-[1px]` : `hover:border-b-[1px]`
          } hover:border-[${border}] cursor-pointer`}
        >
          <PadLockIcon color={font} />
          New Lock
        </Link>
        <Link
          to={`/tokenlocker/viewlock`}
          className={`text-[${
            lock !== "lock" ? font : fontHolder
          }] flex px-2 gap-2 ${
            lock !== "lock" ? `border-b-[1px]` : `hover:border-b-[1px]`
          } cursor-pointer hover:text-[${font}]`}
        >
          <PadLockIcon color={fontHolder} />
          View Locks
        </Link>
      </div>
      {lock === "lock" ? <NewTokenLocker /> : <ViewTokenLocker />}
    </div>
  );
};

export default TokenLocks;
