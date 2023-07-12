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
} from "../../assets/Icons";

function LockedPanel() {
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
  const option_menu1 = useRef(null);
  const option_menu2 = useRef(null);
  const btn_self1 = useRef(null);
  const btn_self2 = useRef(null);
  const buttonArray = [
    {
      component: <TimeleftIcon width={16} height={16} />,
      text: "Relock",
    },
    {
      component: <UserIcon width={16} height={16} />,
      text: "Transfer Ownership",
    },
    {
      component: <PlusIcon width={16} height={16} />,
      text: "Increment Lock",
    },
    {
      component: <WayIcon width={16} height={16} />,
      text: "Split Lock",
    },
  ];
  const handleModal = (str) => () => {
    setOptionStatus1(false);
    setOptionStatus2(false);
    switch (str) {
      case "Relock":
        setRelockModalState(true);
        break;
      case "Transfer Ownership":
        setOwnershipTransModalState(true);
        break;
      case "Increment Lock":
        setIncreaseLockModalState(true);
        break;
      case "Split Lock":
        setSplitModalState(true);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        option_menu1.current &&
        !option_menu1.current.contains(event.target) &&
        btn_self1.current &&
        !btn_self1.current.contains(event.target)
      ) {
        // Clicked outside the div
        setOptionStatus1(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [option_menu1]);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        option_menu2.current &&
        !option_menu2.current.contains(event.target) &&
        btn_self2.current &&
        !btn_self2.current.contains(event.target)
      ) {
        // Clicked outside the div

        setOptionStatus2(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [option_menu2]);

  return (
    <div>
      <p className={`text-[${font}]`}>Withdraw Liquidity</p>
      <p className={`text-[${fontHolder}] text-center`}>WETH / USDT</p>
      <p className={`text-[${fontHolder}] text-center`}>
        <span>0.536..97</span> - <span>Look page</span>
      </p>
      <div
        className={`my-6 bg-[${backgroundHolder}] border-[${border}] border-[1px] rounded-md`}
      >
        <div className="grid grid-cols-12 h-20">
          <div className="col-span-11">
            <p className={`mt-5 ml-5 text-[${font}]`}>0.03% UNLOCKED</p>
            <p className={`my-1 ml-5 text-[${fontHolder}]`}>
              0.000000000004568962
            </p>
          </div>
          <div className="relative">
            <button
              className="duration-500 ease-in-out col-span-1 mt-7"
              ref={btn_self1}
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
              ref={option_menu1}
            >
              {buttonArray.map((item, index) => {
                return (
                  <div key={index}>
                    <button
                      className={`duration-500 ease-in-out menu_rows ${
                        theme === item.text.toLowerCase()
                          ? `text-[#0784c3]`
                          : `text-[${font}] hover:bg-[${hover}] `
                      }`}
                      onClick={handleModal(item.text)}
                    >
                      {item.component}
                      {item.text}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          id=""
          className={`duration-500 ease-in-out my-6 w-[90%]  bg-green-600  ml-[5%] text-[${font}] text-center text-lg  hover:bg-green-400 focus:outline-none  font-medium rounded-lg px-4 py-2.5 items-center `}
          type="button"
          onClick={() => {
            setWithdrawModalState(true);
          }}
        >
          Withdraw
        </button>
      </div>
      <div
        className={`my-6 bg-[${backgroundHolder}] border-[${border}] border-[1px] rounded-md`}
      >
        <div className="grid grid-cols-12 h-20">
          <div className="col-span-11">
            <p className={`mt-5 ml-5 text-[${font}]`}>0.03% UNLOCKED</p>
            <p className={`my-1 ml-5 text-[${fontHolder}]`}>
              0.000000000004568962
            </p>
          </div>
          <div className="relative">
            <button
              className="duration-500 ease-in-out col-span-1 mt-7"
              ref={btn_self2}
              onClick={() => {
                setOptionStatus2(!OptionState2);
              }}
            >
              <OptionsIcon width={30} height={30} />
            </button>
            <div
              className={`${
                OptionState2 ? "animate-slideUpEnter" : "hidden"
              } absolute top-16 -left-5 bg-[${background}] border-[1px] border-[${border}] border-[${border}] w-60 rounded-md shadow`}
              ref={option_menu2}
            >
              {buttonArray.map((item, index) => {
                return (
                  <div key={index}>
                    <button
                      className={`duration-500 ease-in-out menu_rows ${
                        theme === item.text.toLowerCase()
                          ? `text-[#0784c3]`
                          : `text-[${font}] hover:bg-[${hover}] `
                      }`}
                      onClick={handleModal(item.text)}
                    >
                      {item.component}
                      {item.text}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          id=""
          className={`duration-500 ease-in-out my-6 w-[90%]  bg-green-600  ml-[5%] text-[${font}] text-center text-lg  hover:bg-green-400 focus:outline-none  font-medium rounded-lg px-4 py-2.5 items-center `}
          type="button"
          onClick={() => {
            setWithdrawModalState(true);
          }}
        >
          Withdraw
        </button>
      </div>
      <RelockLiquidity
        states={RelockModalState}
        close={() => {
          setRelockModalState(false);
        }}
      />
      <OwnershipTrans
        states={OwnershipTransModalState}
        close={() => {
          setOwnershipTransModalState(false);
        }}
      />
      <IncreaseLock
        states={IncreaseLockModalState}
        close={() => {
          setIncreaseLockModalState(false);
        }}
      />
      <SplitLock
        states={SplitModalState}
        close={() => {
          setSplitModalState(false);
        }}
      />
      <WithdrawLiquidity
        states={WithdrawModalState}
        close={() => {
          setWithdrawModalState(false);
        }}
      />
    </div>
  );
}

export default LockedPanel;
