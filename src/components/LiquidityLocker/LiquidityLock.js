import React, { useState } from "react";
import { useSelector } from "react-redux";
import TimePicker from "./TimePicker";
import SuccessDialog from "./SuccessDialog";

const LiquidityLock = ({ temp }) => {
  const { font, fontHolder, border, background, backgroundHolder, button } =
    useSelector((state) => state);

  const [state, setState] = useState({
    unlock_address: false,
    approve: false,
    dialogStatus: false,
  });

  console.log(state);
  const handleLock = () => {
    setState({
      ...state,
      dialogStatus: true,
    });
  };

  return (
    <div className={`text-[${font}]`}>
      <button onClick={temp}>Back</button>
      <h2 className="text-center text-3xl my-2">Lock Liquidity</h2>
      <h3 className={`text-center text-2xl text-[${fontHolder}] mb-5`}>
        🤔WETH / USDT🤔
      </h3>
      {/* Lock how many LP tokens? */}
      <p className="my-2 text-center">Lock how many LP tokens?</p>
      <div
        className={`border-[${border}] rounded-md border-[1px] bg-[${backgroundHolder}] p-5`}
      >
        <p className="text-right">Balance : 0</p>
        <div className="flex w-full items-center gap-3">
          <input
            type="decimal"
            placeholder="How much LP tokens?"
            className={`bg-[${backgroundHolder}] p-3 border-b-[1px] border-[${border}] w-11/12`}
          />
          <span>USDT</span>
          <button className="bg-[#1ECD84] p-3 rounded-md">Max</button>
        </div>
        <div className="mt-2 gap-3 flex">
          <button
            className={`border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
          >
            25%
          </button>
          <button
            className={`border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
          >
            50%
          </button>
          <button
            className={`border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
          >
            75%
          </button>
          <button
            className={`border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
          >
            100%
          </button>
        </div>
      </div>

      {/* Unlock time */}
      <p className="mb-2 mt-7 text-center">Unlock Date</p>
      <TimePicker />
      {/* <div
        className={`border-[${border}] rounded-md border-[1px] bg-[${backgroundHolder}] p-5`}
      >
        <div className="flex w-full items-center gap-3">
          <input
            type="decimal"
            placeholder="How much LP tokens?"
            className={`bg-[${backgroundHolder}] p-3 border-b-[1px] border-[${border}] w-11/12`}
          />
          <span>USDT</span>
          <button className="bg-[#1ECD84] p-3 rounded-md">Max</button>
        </div>
      </div> */}

      {/* Who can withdraw the tokens */}
      <p className="text-center mt-7 mb-2">Who can withdraw the tokens?</p>
      <div className={`flex justify-center`}>
        <button
          className={`px-4 py-2 rounded-md ${
            !state.unlock_address ? "bg-[#1ECD84]" : ""
          }`}
          onClick={() => {
            setState({ ...state, unlock_address: !state.unlock_address });
          }}
        >
          Me
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            state.unlock_address ? "bg-[#1ECD84]" : ""
          }`}
          onClick={() => {
            setState({ ...state, unlock_address: !state.unlock_address });
          }}
        >
          Someone else
        </button>
      </div>

      {state.unlock_address ? (
        <input
          type="text"
          placeholder="Unlock address"
          className={`bg-[${backgroundHolder}] py-3 px-10 border-[1px] rounded-md border-[${border}] w-full my-3`}
        />
      ) : (
        <></>
      )}

      {/* free option */}
      <p className="mt-7 mb-2 text-center">Free options</p>
      <div className="flex justify-center">
        <button className="bg-[#1ECD84] px-4 py-2 rounded-md text-[#e3e9f1]">
          0.01 ETH
          <br />
          (+1% UNIV)
        </button>
      </div>
      <p className={`my-5 text-[${fontHolder}]`}>
        Once tokens are locked they cannot be withdrawn under any circumstances
        until the timer has expired. Please ensure the parameters are contact,
        as they are final.
      </p>
      <div className="flex justify-around text-center my-3">
        <button
          className={` w-1/3 py-3 rounded-lg ${
            !state.approve
              ? "bg-[#1ECD84] text-[#e3e9f1]"
              : "bg-[#C8C9CE] cursor-not-allowed"
          }`}
          disabled={state.approve}
          onClick={() => setState({ ...state, approve: true })}
        >
          Approve
        </button>
        <button
          className={` w-1/3 py-3 rounded-lg ${
            state.approve
              ? "bg-[#1ECD84] text-[#e3e9f1]"
              : "bg-[#C8C9CE] cursor-not-allowed"
          }`}
          disabled={!state.approve}
          onClick={handleLock}
        >
          Lock
        </button>
      </div>
      <SuccessDialog
        dialogStatus={state.dialogStatus}
        close={() => {
          setState({ ...state, dialogStatus: false });
        }}
      />
    </div>
  );
};

export default LiquidityLock;
