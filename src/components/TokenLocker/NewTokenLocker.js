import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CheckIcon, InfoIcon } from "../../assets/Icons";
import TimePicker from "./TimePicker";
import SuccessDialog from "./SuccessDialog";
import { toast } from "react-toastify";
import { BigNumber, ethers } from "ethers";
import Input from "../Elements/Input";
import { TokenLockerABI } from "../../assets/ABIs";

const TOKEN_ADDRESS = "0xe02c1e6eba5e2f189020968f550ed3fb1a6fe7a8";

const NewTokenLocker = ({ token_Address }) => {
  const { fontHolder, border, background, hover, backgroundHolder, button } =
    useSelector((state) => state.theme);
  const { wallet_address, contract } = useSelector((state) => state.web3);

  const [state, setState] = useState({
    balanceOf: "0",
    allowance: "0",
    symbol: "",
    token: "",
    date: "",
    unlock_address: "",
    unlock_address_state: true,
    condition: false,
    approve: false,
    unlockovertime: false,
    dialogStatus: false,
  });

  const [approveState, setApproveState] = useState(false);

  const handleToken = (num) => () => {
    setState({
      ...state,
      token: state.balanceOf * (num / 100),
    });
  };

  useEffect(() => {
    async function getTokenInfo() {
      const { ethereum } = window;
      if (ethereum && token_Address.length === 42) {
        try {
          const balanceOf = await contract.balanceOf(wallet_address);
          const symbol = await contract.symbol();
          const allowance = await contract.allowance(
            wallet_address,
            TOKEN_ADDRESS
          );
          const decimals = await contract.decimals();
          setState({
            ...state,
            balanceOf: ethers.utils.formatUnits(balanceOf, decimals),
            symbol,
            allowance: ethers.utils.formatUnits(allowance, decimals),
          });
        } catch (err) {
          toast.error(err.message.split("(")[0].split("[")[0]);
        }
      }
    }

    getTokenInfo();
    return () => {};
  }, []);

  // SECTION - handle lock with web3 integration

  const handleLock = async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        setState({
          ...state,
          dialogStatus: true,
        });
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const lockerContract = new ethers.Contract(
          TOKEN_ADDRESS,
          TokenLockerABI,
          signer
        );
        const unlock_date = state.date;
        const now = new Date();
        const unlocks_time = unlock_date - now;
        const decimals = await contract.decimals();
        const lockToken = await lockerContract.lock(token_Address, [
          {
            owner: wallet_address,
            amount: parseInt(state.token * 10 ** decimals),
            startEmission: 0,
            endEmission: unlocks_time,
            condition: "0x0000000000000000000000000000000000000000",
          },
        ]);
        await lockToken.wait(1);
        if (lockToken.status === 1) {
          toast.success("Lock Success!");
        } else {
          toast.error("Lock Failed!");
        }
      } catch (err) {
        setState({ ...state, dialogStatus: false });
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    } else {
      toast.error("Metamask is not detected");
    }
  };

  // !SECTION - handle lock with web3 integration

  //SECTION - handle approve

  const handleApprove = async () => {
    const { ethereum } = window;
    const { token } = state;
    if (ethereum) {
      try {
        const decimals = await contract.decimals();
        const approve = await contract.approve(
          TOKEN_ADDRESS,
          parseInt(token * 10 ** decimals)
        );
        await approve.wait(1);
        let allowance = await contract.allowance(wallet_address, TOKEN_ADDRESS);
        const symbol = await contract.symbol();
        allowance = ethers.utils.formatUnits(allowance, decimals);
        toast.success(`${allowance} of ${symbol} is approved!`);
        if (approve) {
          setState({ ...state, allowance: allowance });
        }
      } catch (err) {
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    }
  };
  //!SECTION

  return (
    <>
      <div className={`box_1 p-0 bg-[${background}] border-[${border}]`}>
        <div className="p-5 gap-5 flex flex-col">
          {/* SECTION Lock how many LP tokens? */}

          <p className="text-center font-bold pt-5">Lock how many LP tokens?</p>
          <div
            className={`border-[${border}] rounded-md border-[1px] bg-[${backgroundHolder}] p-5`}
          >
            <p className="text-right">Balance : {state.balanceOf}</p>
            <div className="flex w-full items-center gap-3">
              <input
                type="decimal"
                placeholder="How much LP tokens?"
                className={`bg-[${backgroundHolder}] p-3 border-b-[1px] border-[${border}] w-11/12`}
                value={state.token}
                onChange={(e) => setState({ ...state, token: e.target.value })}
              />
              <span>{state.symbol}</span>
            </div>
            <div className="mt-2 gap-3 flex">
              <button
                className={`duration-500 ease-in-out border-[1px] border-[${border}] rounded-md ${
                  state.lptoken === 25 ? `bg-[${background}]` : `bg-[${button}]`
                }  text-[${fontHolder}] px-2 py-1 hover:bg-[${hover}]`}
                onClick={handleToken(25)}
              >
                25%
              </button>
              <button
                className={`duration-500 ease-in-out border-[1px] border-[${border}] rounded-md ${
                  state.lptoken === 50 ? `bg-[${background}]` : `bg-[${button}]`
                } text-[${fontHolder}] px-2 py-1 hover:bg-[${hover}]`}
                onClick={handleToken(50)}
              >
                50%
              </button>
              <button
                className={`duration-500 ease-in-out border-[1px] border-[${border}] rounded-md ${
                  state.lptoken === 75 ? `bg-[${background}]` : `bg-[${button}]`
                } text-[${fontHolder}] px-2 py-1 hover:bg-[${hover}]`}
                onClick={handleToken(75)}
              >
                75%
              </button>
              <button
                className={`duration-500 ease-in-out border-[1px] border-[${border}] rounded-md ${
                  state.lptoken === 100
                    ? `bg-[${background}]`
                    : `bg-[${button}]`
                } text-[${fontHolder}] px-2 py-1 hover:bg-[${hover}]`}
                onClick={handleToken(100)}
              >
                100%
              </button>
            </div>
          </div>
          {/* !SECTION */}

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

          <TimePicker
            dateMoment={state.date}
            setDateMoment={(moment) =>
              setState({ ...state, date: new Date(moment) })
            }
          />

          {/* SECTION Who can withdraw the tokens */}

          <p className="text-center font-bold">Who can withdraw the tokens?</p>
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

          {/* !SECTION  */}
          <p className="text-center font-bold">Premature Unlock condition</p>
          <div className="flex justify-center items-center gap-10">
            <button
              className={
                !state.condition
                  ? "text-[#1ECD84] duration-500 ease-in-out"
                  : "duration-500 ease-in-out"
              }
              onClick={() =>
                setState({ ...state, condition: !state.condition })
              }
            >
              No
            </button>
            <button
              className={
                state.condition
                  ? "text-[#1ECD84] duration-500 ease-in-out"
                  : "duration-500 ease-in-out"
              }
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
            <button className="duration-500 ease-in-out bg-[#1ECD84] px-3 py-1 rounded-md">
              Max
            </button>
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
          className={`duration-500 ease-in-out w-1/2 py-3 rounded-lg ${
            !state.approve
              ? "bg-[#1ECD84] text-[#e3e9f1]"
              : "bg-[#C8C9CE] cursor-not-allowed"
          }`}
          disabled={state.approve}
          onClick={handleApprove}
        >
          Approve
        </button>
        <button
          className={` w-1/2 py-3 rounded-lg ${
            Number(state.allowance).toFixed(4) >= Number(state.token).toFixed(4)
              ? "bg-[#1ECD84] text-[#e3e9f1]"
              : "bg-[#C8C9CE] cursor-not-allowed"
          }`}
          disabled={
            !Number(state.allowance).toFixed(4) >=
            Number(state.token).toFixed(4)
          }
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
