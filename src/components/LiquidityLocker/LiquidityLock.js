import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimePicker from "./TimePicker";
import SuccessDialog from "./SuccessDialog";
import Input from "../Layout/Input";

const LiquidityLock = ({ temp }) => {
  const { font, fontHolder, border, background, backgroundHolder } =
    useSelector((state) => state.theme);

  const { pairInfo } = useSelector((state) => state.web3);
  const [isValid, setIsValid] = useState(false);
  const [state, setState] = useState({
    lptoken: "",
    date: "",
    unlock_address: "",
    unlock_address_state: false,
    approve: false,
    dialogStatus: false,
  });
  // SECTION - handle lock with web3 intergration

  const handleLock = () => {
    setState({
      ...state,
      dialogStatus: true,
    });
  };

  // !SECTION - handle lock with web3 intergration

  const handleLptokenAmount = (rate) => () => {
    setState({
      ...state,
      lptoken: ((pairInfo.balanceOf * rate) / 100).toFixed(20),
    });
  };

  //SECTION - isValid

  useEffect(() => {
    setIsValid(
      (Number(state.lptoken) <= Number(pairInfo.balanceOf) &&
        state.lptoken.length !== 0 &&
        state.date.length !== 0 &&
        !state.unlock_address_state) ||
        (Number(state.lptoken) <= Number(pairInfo.balanceOf) &&
          state.lptoken.length !== 0 &&
          state.date.length !== 0 &&
          state.unlock_address_state &&
          state.unlock_address.length !== 0 &&
          state.unlock_address.length === 42)
    );
  }, [state]);

  //!SECTION - isValid
  return (
    <div className={`text-[${font}]`}>
      <button
        onClick={temp}
        className={`duration-500 ease-in-out border-[1px] border-[${border}] px-3 py-2 mx-2 rounded-lg text-[${fontHolder}] hover:bg-[${backgroundHolder}]`}
      >
        Back
      </button>
      <h2 className="text-center text-3xl my-2">Lock Liquidity</h2>
      <h3 className={`text-center text-2xl text-[${fontHolder}] mb-5`}>
        🤔 WETH / USDT🤔
      </h3>

      {/*SECTION Lock how many LP tokens? */}

      <p className="my-2 text-center">Lock how many LP tokens?</p>
      <div
        className={`border-[${border}] rounded-md border-[1px] bg-[${backgroundHolder}] p-5`}
      >
        <p className={`text-right text-[${font}]`}>
          Balance : {pairInfo.balanceOf}
        </p>
        <div className="flex w-full items-center gap-3">
          <Input
            type="decimal"
            placeholder="How much LP tokens?"
            className={`bg-[${backgroundHolder}] p-3 border-b-[1px] border-[${border}] w-11/12`}
            onChange={(e) => {
              setState({
                ...state,
                lptoken: e.target.value,
              });
            }}
            value={state.lptoken}
            invalid={
              Number(state.lptoken) > Number(pairInfo.balanceOf) ||
              state.lptoken.length === 0
            }
            invalidText={
              Number(state.lptoken) > Number(pairInfo.balanceOf)
                ? `The amount must be smaller than LP token's balance.`
                : "Invalid LP token amount"
            }
            // step={"any"}
          />
          <span>USDT</span>
          {/* NOTE - Max button */}
          <button
            className="duration-500 ease-in-out bg-[#1ECD84] p-3 rounded-md"
            onClick={handleLptokenAmount(100)}
          >
            Max
          </button>
        </div>
        <div className="mt-2 gap-3 flex">
          <button
            className={`duration-500 ease-in-out border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
            onClick={handleLptokenAmount(25)}
          >
            25%
          </button>
          <button
            className={`duration-500 ease-in-out border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
            onClick={handleLptokenAmount(50)}
          >
            50%
          </button>
          <button
            className={`duration-500 ease-in-out border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
            onClick={handleLptokenAmount(75)}
          >
            75%
          </button>
        </div>
      </div>

      {/* !SECTION Lock how many LP tokens?*/}

      {/*SECTION Unlock time */}
      <p className="mb-2 mt-7 text-center">Unlock Date</p>
      <TimePicker
        dateMoment={state.date}
        setDateMoment={(moment) =>
          setState({ ...state, date: new Date(moment) })
        }
      />
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
      {/* !SECTION */}

      {/*SECTION Who can withdraw the tokens */}

      <p className="text-center mt-7 mb-2">Who can withdraw the tokens?</p>
      <div className={`flex justify-center`}>
        <button
          className={`duration-500 ease-in-out px-4 py-2 rounded-md ${
            !state.unlock_address_state ? "bg-[#1ECD84]" : ""
          }`}
          onClick={() => {
            setState({
              ...state,
              unlock_address_state: !state.unlock_address_state,
            });
          }}
        >
          Me
        </button>
        <button
          className={`duration-500 ease-in-out px-4 py-2 rounded-md ${
            state.unlock_address_state ? "bg-[#1ECD84]" : ""
          }`}
          onClick={() => {
            setState({
              ...state,
              unlock_address: "",
              unlock_address_state: !state.unlock_address_state,
            });
          }}
        >
          Someone else
        </button>
      </div>

      {state.unlock_address_state ? (
        <Input
          type="text"
          placeholder="Unlock address"
          className={`bg-[${backgroundHolder}] py-3 px-10 border-[1px] rounded-md border-[${border}] w-full my-3`}
          value={state.unlock_address}
          onChange={(e) => {
            setState({ ...state, unlock_address: e.target.value });
          }}
          invalid={state.unlock_address.length !== 42}
          invalidText={`Address Length must 42.`}
        />
      ) : (
        <></>
      )}

      {/* !SECTION Who can withdraw the tokens*/}

      {/*SECTION free option */}

      <p className="mt-7 mb-2 text-center">Free options</p>
      <div className="flex justify-center">
        <button className="duration-500 ease-in-out bg-[#1ECD84] px-4 py-2 rounded-md text-[#e3e9f1]">
          0.01 ETH
          <br />
          (+1% UNIV)
        </button>
      </div>

      {/* !SECTION  free option*/}

      <p className={`my-5 text-[${fontHolder}]`}>
        Once tokens are locked they cannot be withdrawn under any circumstances
        until the timer has expired. Please ensure the parameters are contact,
        as they are final.
      </p>
      <div className="flex justify-around text-center my-3">
        <button
          className={`duration-500 ease-in-out w-1/3 py-3 rounded-lg ${
            !state.approve && isValid
              ? "bg-[#1ECD84] text-[#e3e9f1]"
              : "bg-[#C8C9CE] cursor-not-allowed"
          }`}
          disabled={state.approve}
          onClick={() => setState({ ...state, approve: true })}
        >
          Approve
        </button>
        <button
          className={`duration-500 ease-in-out w-1/3 py-3 rounded-lg ${
            state.approve && isValid
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
