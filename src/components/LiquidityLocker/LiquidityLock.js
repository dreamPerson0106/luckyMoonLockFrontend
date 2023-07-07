import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TimePicker from "./TimePicker";
import SuccessDialog from "./SuccessDialog";
import Input from "../Layout/Input";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { LockerABI } from "../../assets/ABIs";

const LOCKER_ADDRESS = "0xfc2a975b8576d8bd57dbc3d55c10795de9944a82";

const LiquidityLock = ({ temp, pairAddress }) => {
  const { font, fontHolder, border, background, backgroundHolder } =
    useSelector((state) => state.theme);
  const { pairContract, wallet_address } = useSelector((state) => state.web3);
  const [pairBalanceOf, setPairBalanceOf] = useState("0");
  const [transferState, setTransferState] = useState(false);
  const [approveState, setApproveState] = useState(false);

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

  const handleLock = async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const lockerContract = ethers.Contract(
          LOCKER_ADDRESS,
          LockerABI,
          signer
        );

        const transfer = await lockerContract.transfer(
          LOCKER_ADDRESS,
          state.lptoken * 10 ** 18
        );
        setState({
          ...state,
          dialogStatus: true,
        });
        if (transfer) {
          setTransferState(true);
        }
      } catch (err) {
        setState({ ...state, dialogStatus: false });
        toast.error(err.message.split("(")[0]);
      }
    } else {
      toast.error("Metamask is not detected");
    }
  };

  // !SECTION - handle lock with web3 intergration

  const handleLptokenAmount = (rate) => () => {
    setState({
      ...state,
      lptoken: (pairBalanceOf * (rate / 100)).toFixed(18),
    });
  };

  //SECTION - handle approve

  const handleApprove = async () => {
    const { ethereum } = window;
    const { lptoken } = state;
    // return console.log(lptoken * 10 ** 18);
    if (ethereum) {
      try {
        setApproveState(true);
        const approve = await pairContract.approve(
          LOCKER_ADDRESS,
          lptoken * 10 ** 18
        );
        setApproveState(false);
        if (approve) {
          setState({ ...state, approve: true });
        }
      } catch (err) {
        toast.error(err.message.split("(")[0]);
        setApproveState(false);
      }
    }
  };
  //!SECTION

  useEffect(() => {
    async function getPairContractInfo() {
      let balanceOf = await pairContract.balanceOf(wallet_address);
      balanceOf = ethers.utils.formatEther(balanceOf);
      setPairBalanceOf(balanceOf);
    }
    try {
      getPairContractInfo();
    } catch (err) {
      console.log(err);
    }
    return () => {};
  }, []);

  //SECTION - isValid

  useEffect(() => {
    setIsValid(
      (Number(state.lptoken) <= Number(pairBalanceOf) &&
        state.lptoken.length !== 0 &&
        state.date.length !== 0 &&
        !state.unlock_address_state) ||
        (Number(state.lptoken) <= Number(pairBalanceOf) &&
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
        className={`border-[1px] border-[${border}] px-3 py-2 mx-2 rounded-lg text-[${fontHolder}] hover:bg-[${backgroundHolder}]`}
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
        <p className={`text-right text-[${font}]`}>Balance : {pairBalanceOf}</p>
        <div className="flex w-full items-center gap-3">
          <Input
            type="decimal"
            placeholder="How much LP tokens?"
            className={`bg-[${backgroundHolder}] px-3 py-2 border-b-[1px] border-[${border}] w-full`}
            onChange={(e) => {
              setState({
                ...state,
                lptoken: e.target.value,
              });
            }}
            value={state.lptoken}
            invalid={
              Number(state.lptoken) > Number(pairBalanceOf) ||
              state.lptoken.length === 0
            }
            invalidText={
              Number(state.lptoken) > Number(pairBalanceOf)
                ? `The amount must be smaller than LP token's balance.`
                : "Invalid LP token amount"
            }
          />
          <p className="w-2/12">LP Token</p>
        </div>
        <div className="mt-2 gap-3 flex">
          <button
            className={`border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
            onClick={handleLptokenAmount(25)}
          >
            25%
          </button>
          <button
            className={`border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
            onClick={handleLptokenAmount(50)}
          >
            50%
          </button>
          <button
            className={`border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
            onClick={handleLptokenAmount(75)}
          >
            75%
          </button>
          <button
            className={`border-[1px] border-[${border}] rounded-md bg-[${background}] text-[${fontHolder}] px-2 py-1 `}
            onClick={handleLptokenAmount(100)}
          >
            100%
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
          className={`px-4 py-2 rounded-md ${
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
          className={`px-4 py-2 rounded-md ${
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
        <button className="bg-[#1ECD84] px-4 py-2 rounded-md text-[#e3e9f1]">
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
          className={` w-1/3 py-3 rounded-lg ${
            !state.approve && isValid
              ? !approveState
                ? "bg-[#1ECD84] text-[#e3e9f1] hover:bg-emerald-500 active:bg-emerald-700"
                : "bg-[#1ECD84] text-[#e3e9f1] cursor-not-allowed"
              : "bg-[#C8C9CE] cursor-not-allowed"
          }`}
          disabled={(state.approve && isValid) || approveState}
          onClick={handleApprove}
        >
          {!approveState ? (
            "Approve"
          ) : (
            <div className=" flex justify-center items-center">
              <span className="dot-pulse" />
            </div>
          )}
        </button>
        <button
          className={` w-1/3 py-3 rounded-lg ${
            state.approve && isValid
              ? "bg-[#1ECD84] text-[#e3e9f1]"
              : "bg-[#C8C9CE] cursor-not-allowed"
          }`}
          disabled={!state.approve && isValid}
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
        state={transferState}
      />
    </div>
  );
};

export default LiquidityLock;
