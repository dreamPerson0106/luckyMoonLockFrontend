import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CheckIcon, InfoIcon } from "../../assets/Icons";
import TimePicker from "./TimePicker";
import SuccessDialog from "./SuccessDialog";

const NewTokenLocker = () => {
  const { fontHolder, border, background, hover, backgroundHolder, button } =
    useSelector((state) => state.theme);

  const [state, setState] = useState({
    unlock_address: false,
    condition: false,
    approve: false,
    lptoken: 25,
    unlockovertime: false,
    dialogStatus: false,
  });

  const handleLock = () => {
    setState({
      ...state,
      dialogStatus: true,
    });
  };

  const handleLpToken = (num) => () => {
    setState({
      ...state,
      lptoken: num,
    });
  };

  return (
    <>
      <div className={`box_1 p-0 bg-[${background}] border-[${border}]`}>
        <div className="p-5 gap-5 flex flex-col">
          {/* Lock how many LP tokens? */}
          <p className="text-center font-bold pt-5">Lock how many LP tokens?</p>
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
              <span>UNIV2</span>
              <button className="bg-[#1ECD84] px-3 py-1 rounded-md">Max</button>
            </div>
            <div className="mt-2 gap-3 flex">
              <button
                className={`border-[1px] border-[${border}] rounded-md ${
                  state.lptoken === 25 ? `bg-[${background}]` : `bg-[${button}]`
                }  text-[${fontHolder}] px-2 py-1 hover:bg-[${hover}]`}
                onClick={handleLpToken(25)}
              >
                25%
              </button>
              <button
                className={`border-[1px] border-[${border}] rounded-md ${
                  state.lptoken === 50 ? `bg-[${background}]` : `bg-[${button}]`
                } text-[${fontHolder}] px-2 py-1 hover:bg-[${hover}]`}
                onClick={handleLpToken(50)}
              >
                50%
              </button>
              <button
                className={`border-[1px] border-[${border}] rounded-md ${
                  state.lptoken === 75 ? `bg-[${background}]` : `bg-[${button}]`
                } text-[${fontHolder}] px-2 py-1 hover:bg-[${hover}]`}
                onClick={handleLpToken(75)}
              >
                75%
              </button>
              <button
                className={`border-[1px] border-[${border}] rounded-md ${
                  state.lptoken === 100
                    ? `bg-[${background}]`
                    : `bg-[${button}]`
                } text-[${fontHolder}] px-2 py-1 hover:bg-[${hover}]`}
                onClick={handleLpToken(100)}
              >
                100%
              </button>
            </div>
          </div>
          {/* Who can withdraw the tokens */}
          <p className="text-center font-bold">Who can withdraw the tokens?</p>
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
              className={`bg-[${backgroundHolder}] py-3 px-4 border-[1px] rounded-md border-[${border}] w-full `}
            />
          ) : (
            <></>
          )}
          <div className="flex justify-around items-center mx-16">
            <button
              className={!state.unlockovertime ? "text-[#1ECD84]" : ""}
              onClick={() =>
                setState({ ...state, unlockovertime: !state.unlockovertime })
              }
            >
              Unlock on date
            </button>
            <button
              className={state.unlockovertime ? "text-[#1ECD84]" : ""}
              onClick={() =>
                setState({ ...state, unlockovertime: !state.unlockovertime })
              }
            >
              Unlock over time
            </button>
          </div>

          <TimePicker />
          <p className="text-center font-bold">Premature Unlock condition</p>
          <div className="flex justify-center items-center gap-10">
            <button
              className={!state.condition ? "text-[#1ECD84]" : ""}
              onClick={() =>
                setState({ ...state, condition: !state.condition })
              }
            >
              No
            </button>
            <button
              className={state.condition ? "text-[#1ECD84]" : ""}
              onClick={() =>
                setState({ ...state, condition: !state.condition })
              }
            >
              Yes
            </button>
          </div>
          <div
            className={`border-[${border}] rounded-md border-[1px] bg-[${backgroundHolder}] p-5 text-center`}
          >
            0/00009 USDC total locked
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">OPTIONAL : Enable free locking</p>
            <button className="bg-[#1ECD84] px-3 py-1 rounded-md">Max</button>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Fee:</p>
            <p className="font-bold">0.35%</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Total Debit:</p>
            <p className="font-bold">0 USDC</p>
          </div>
          <div
            className={`border-[${border}] rounded-md border-[1px] bg-[${backgroundHolder}] py-3 px-5 mx-auto text-center text-[${fontHolder}] flex gap-2 items-center`}
          >
            Change fee seperately
            <CheckIcon />
          </div>
          <p className={`text-[${fontHolder}] text-center text-xs`}>
            Apply a fee to each lock, or pay it once seperately, paying the fee
            seperately helps ensure the amount of the lock matches the amount
            you entered.
          </p>
        </div>
        <div
          className={`bg-[${backgroundHolder}] rounded-b-lg p-5 flex flex-col gap-5`}
        >
          <p className={`text-[${fontHolder}] text-center text-xs`}>
            Once tokens are locked they cannot be withdraw under any
            circumstances until the timer hasexpired. Please ensure the
            parameters are correct or they are final.
          </p>
          <p className={`text-[#FEAA08] text-center`}>
            Error: Total lock amount is ZERO
          </p>
          <div>
            <div className="flex gap-2">
              <InfoIcon />
              <p className="text-bold">Attention!</p>
            </div>
            <p className="pl-7 text-xs py-1">
              Some locks are being sent to users that are not your currently
              connected account!
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-5 text-center my-3">
        <button
          className={` w-1/2 py-3 rounded-lg ${
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
          className={` w-1/2 py-3 rounded-lg ${
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
    </>
  );
};

export default NewTokenLocker;
