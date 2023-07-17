import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import RelockLiquidity from "./modals/RelockLiquidity";
import OwnershipTrans from "./modals/OwnershipTrans";
import WithdrawLiquidity from "./modals/WithdrawLiquidity";
import SplitLock from "./modals/SplitLock";
import IncreaseLock from "./modals/IncreaseLock";
import {
  OptionsIcon,
  PlusIcon,
  TimeleftIcon,
  UserIcon,
  WayIcon,
  Setting,
} from "../../assets/Icons";
import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { LPTokenLockerABI, TokenABI } from "../../assets/ABIs";
import Loading from "../Layout/Loading";

const LOCKER_ADDRESS = "0xfc2a975b8576d8bd57dbc3d55c10795de9944a82";

function LockedPanel({ lpTokenAddress, back }) {
  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    border,
    hover,
    theme,
  } = useSelector((state) => state.theme);

  const [OptionState1, setOptionStatus1] = useState(false);
  const [OptionState2, setOptionStatus2] = useState(false);
  const [RelockModalState, setRelockModalState] = useState(false);
  const [OwnershipTransModalState, setOwnershipTransModalState] =
    useState(false);
  const [IncreaseLockModalState, setIncreaseLockModalState] = useState(false);
  const [SplitModalState, setSplitModalState] = useState(false);
  const [WithdrawModalState, setWithdrawModalState] = useState(false);
  const [lpTokens, setLPTokens] = useState([]);
  const [handleInfo, setHandleInfo] = useState({
    index: null,
    lockID: null,
    decimals: null,
  });

  const { wallet_address, contract } = useSelector((state) => state.web3);

  useEffect(() => {
    async function getPairInfo() {
      const { ethereum } = window;
      if (ethereum) {
        try {
          let token0 = await contract.token0();
          let token1 = await contract.token1();
          const decimals = await contract.decimals();
          setHandleInfo({ ...handleInfo, decimals });
          const provider = new ethers.providers.Web3Provider(ethereum);
          const token0Instance = new ethers.Contract(
            token0,
            TokenABI,
            provider
          );
          token0 = token0Instance.symbol();
          const token1Instance = new ethers.Contract(
            token1,
            TokenABI,
            provider
          );
          token1 = token1Instance.symbol();

          const LockerInstance = new ethers.Contract(
            LOCKER_ADDRESS,
            LPTokenLockerABI,
            provider
          );
          const lpTokenNumber = await LockerInstance.getUserNumLocksForToken(
            wallet_address,
            lpTokenAddress
          );
          let lockedLPTokens = [];
          for (let i = 0; i < BigNumber.from(lpTokenNumber).toNumber(); i++) {
            const lockedLPToken =
              await LockerInstance.getUserLockForTokenAtIndex(
                wallet_address,
                lpTokenAddress,
                i
              );

            const lockDate = BigNumber.from(lockedLPToken[0]).toNumber() * 1000;
            const amount = ethers.utils.formatUnits(lockedLPToken[1], decimals);
            const initialAmount = ethers.utils.formatUnits(
              lockedLPToken[2],
              decimals
            );
            const unlockDate =
              BigNumber.from(lockedLPToken[3]).toNumber() * 1000;
            const lockID = BigNumber.from(lockedLPToken[4]).toNumber();
            lockedLPTokens.push({
              lockDate,
              amount,
              initialAmount,
              unlockDate,
              lockID,
            });
          }
          setLPTokens(lockedLPTokens);
        } catch (err) {
          toast.error(err.message.split("(")[0].split("[")[0]);
        }
      } else {
        toast.warn("Metamask is not detect!");
      }
    }
    getPairInfo();
    return () => {};
  }, [
    WithdrawModalState,
    SplitModalState,
    RelockModalState,
    OwnershipTransModalState,
    IncreaseLockModalState,
  ]);

  const handleRelock = (lockID, index) => () => {
    setHandleInfo({ ...handleInfo, index, lockID });
    setRelockModalState(true);
  };
  const handleSplit = (lockID, index) => () => {
    setHandleInfo({ ...handleInfo, index, lockID });
    setSplitModalState(true);
  };
  const handleWithdraw = (lockID, index) => () => {
    setHandleInfo({ ...handleInfo, index, lockID });
    setWithdrawModalState(true);
  };
  const handleTransferOwnerShip = (lockID, index) => () => {
    setHandleInfo({ ...handleInfo, index, lockID });
    setOwnershipTransModalState(true);
  };
  const handleIncrementLock = (lockID, index) => () => {
    setHandleInfo({ ...handleInfo, index, lockID });
    setIncreaseLockModalState(true);
  };
  return (
    <div>
      <button
        onClick={back}
        className={`px-3 py-1 border-[1px] border-[${border}] rounded-md`}
      >
        Back
      </button>
      <p className={`text-[${font}] my-2 mx-2`}>Withdraw Liquidity</p>
      {lpTokens.length !== 0 ? (
        lpTokens.map((lpToken, index) => {
          return (
            <div
              className={`my-6 bg-[${backgroundHolder}] border-[${border}] border-[1px] rounded-md`}
              key={index}
            >
              <div className="grid grid-cols-12 h-20">
                <div className="col-span-11">
                  <p className={`mt-5 ml-5 text-[${font}]`}>
                    0.03%{" "}
                    {lpToken.unlockDate > new Date().getTime()
                      ? "LOCKED"
                      : "UNLOCKED"}
                  </p>
                  <p className={`my-1 ml-5 text-[${fontHolder}]`}>
                    {lpToken.amount}
                  </p>
                </div>
                <div className="relative">
                  <button
                    className="col-span-1 mt-7"
                    onClick={() => {
                      setOptionStatus1(!OptionState1);
                    }}
                  >
                    <OptionsIcon width={30} height={30} />
                  </button>
                  <div
                    className={`${
                      OptionState1 ? "animate-slideUpEnter" : "hidden"
                    } absolute top-16 -left-5 bg-[${background}] border-[1px] border-[${border}] border-[${border}] w-60 rounded-md shadow`}
                  >
                    <button
                      className={`menu_rows text-[${font}] hover:bg-[${hover}] `}
                      onClick={handleRelock(lpToken.lockID, index)}
                    >
                      <TimeleftIcon width={16} height={16} />
                      Relock
                    </button>
                    <button
                      className={`menu_rows text-[${font}] hover:bg-[${hover}] `}
                      onClick={handleTransferOwnerShip(lpToken.lockID, index)}
                    >
                      <UserIcon width={16} height={16} />
                      Transfer Ownership
                    </button>
                    <button
                      className={`menu_rows text-[${font}] hover:bg-[${hover}] `}
                      onClick={handleIncrementLock(lpToken.lockID, index)}
                    >
                      <PlusIcon width={16} height={16} />
                      Increment Lock
                    </button>
                    <button
                      className={`menu_rows text-[${font}] hover:bg-[${hover}] `}
                      onClick={handleSplit(lpToken.lockID, index)}
                    >
                      <WayIcon width={16} height={16} />
                      Split Lock
                    </button>
                  </div>
                </div>
              </div>
              <button
                id=""
                className={` my-6 w-[90%]  bg-green-600  ml-[5%] text-[${font}] text-center text-lg  hover:bg-green-400 focus:outline-none  font-medium rounded-lg px-4 py-2.5 items-center `}
                type="button"
                onClick={handleWithdraw(lpToken.lockID, index)}
              >
                Withdraw
              </button>
            </div>
          );
        })
      ) : (
        <Loading
          className="slideUpEnter"
          style={{ minHeight: "100px" }}
          text={`Loading`}
        />
      )}
      <RelockLiquidity
        states={RelockModalState}
        index={handleInfo.index}
        lockID={handleInfo.lockID}
        lpTokenAddress={lpTokenAddress}
        close={() => {
          setRelockModalState(false);
        }}
      />
      <OwnershipTrans
        states={OwnershipTransModalState}
        index={handleInfo.index}
        lockID={handleInfo.lockID}
        lpTokenAddress={lpTokenAddress}
        close={() => {
          setOwnershipTransModalState(false);
        }}
      />
      <IncreaseLock
        states={IncreaseLockModalState}
        index={handleInfo.index}
        lockID={handleInfo.lockID}
        decimals={handleInfo.decimals}
        lpTokenAddress={lpTokenAddress}
        close={() => {
          setIncreaseLockModalState(false);
        }}
      />
      <SplitLock
        states={SplitModalState}
        index={handleInfo.index}
        lockID={handleInfo.lockID}
        lpTokenAddress={lpTokenAddress}
        decimals={handleInfo.decimals}
        close={() => {
          setSplitModalState(false);
        }}
      />
      <WithdrawLiquidity
        states={WithdrawModalState}
        index={handleInfo.index}
        lockID={handleInfo.lockID}
        lpTokenAddress={lpTokenAddress}
        decimals={handleInfo.decimals}
        close={() => {
          setWithdrawModalState(false);
        }}
      />
    </div>
  );
}

export default LockedPanel;
