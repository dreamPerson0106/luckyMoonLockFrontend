import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewTokenLock from "./NewTokenLock";
import { Outlet } from "react-router-dom";

function Extoken() {
  const [activeTab, setActiveTab] = useState(0);
  const [innerLockStatus, setInnerLockStatus] = useState(true);
  const { font, fontHolder, border, background, hover } = useSelector(
    (state) => state.theme
  );

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
        <div className={`mb-4 border-b text-[${font}] border-gray-200`}>
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="myTab"
            data-tabs-toggle="#innerTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4  border-[${font}]-700 rounded-t-lg hover:text-[${fontHolder}]  ${
                  activeTab === 0 && "border-b-4 "
                }`}
                id="newlock-tab"
                data-tabs-target="#lock"
                type="button"
                role="tab"
                aria-controls="newlock"
                aria-selected="true"
                onClick={() => {
                  setInnerLockStatus(true);
                  setActiveTab(0);
                }}
              >
                New Lock
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className={`inline-block p-4  border-[${font}]-700 rounded-t-lg hover:text-[${fontHolder}]  ${
                  activeTab === 1 && "border-b-4 "
                }`}
                id="edit_withdraw-tab"
                data-tabs-target="#edit_withdraw"
                type="button"
                role="tab"
                aria-controls="edit_withdraw"
                aria-selected="false"
                onClick={() => {
                  setInnerLockStatus(false);
                  setActiveTab(1);
                }}
              >
                Edit / Withdraw
              </button>
            </li>
          </ul>
        </div>
      </div>
      <NewTokenLock innerLockStatus={innerLockStatus}></NewTokenLock>
    </div>
  );
}

export default Extoken;
