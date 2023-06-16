import React from "react";
import { useSelector } from "react-redux";
import {
  LaunchPadIcon,
  LockedLiquidityTokenIcon,
  Tokenlocker,
  TokenminterIcon,
} from "../../assets/Icons";
import "./service.css";

const Services = () => {
  const { font, fontHolder, background, backgroundHolder, border } =
    useSelector((state) => state);
  return (
    <div className={`container max-w-2xl text-[${font}] py-12 mx-auto`}>
      <h1 className="text-center text-5xl mb-4">Our Services</h1>
      <div className="flex justify-between text-lg text-bold p-4">
        <p>Liquidity Locker</p> <p>Token Locker</p> <p>Token minter</p>
      </div>
      <div className={`serviceBox border-[${border}] bg-[${background}]`}>
        <div className="flex py-2 items-center gap-3">
          <LockedLiquidityTokenIcon width={76} height={76} />
          <div>
            <h5 className={`text-base font-semibold text-[${font}]`}>
              Locked liquidities and tokens
            </h5>
            <p className={`text-[${fontHolder}]`}>
              Read about all of our services.
            </p>
          </div>
        </div>
        <hr className={`text-[${backgroundHolder}]`} />
        <div className="flex py-2 items-center gap-3">
          <TokenminterIcon width={76} height={76} />
          <div>
            <h5 className={`text-base font-semibold text-[${font}]`}>
              Token Minter
            </h5>
            <p className={`text-[${fontHolder}]`}>
              Create your own ENMT Token or customizable Tax Token. Both are
              fullyERC-20 compliant!
            </p>
            <p className={`text-[${fontHolder}]`}>
              Requires no coding skills and no additional audits.
            </p>
          </div>
        </div>
        <hr className={`text-[${backgroundHolder}]`} />
        <div className="flex py-2 items-center gap-3">
          <LaunchPadIcon width={76} height={76} />
          <div>
            <h5 className={`text-base font-semibold text-[${font}]`}>
              LaunchPad
            </h5>
            <p className={`text-[${fontHolder}]`}>
              Raise capital to kick start your blockchain project
            </p>
            <p className={`text-[${fontHolder}]`}>
              Decentralised presale service
            </p>
          </div>
        </div>
        <hr className={`text-[${backgroundHolder}]`} />
        <div className="flex py-2 items-center gap-3">
          <Tokenlocker width={76} height={76} />
          <div>
            <h5 className={`text-base font-semibold text-[${font}]`}>
              Token Locker
            </h5>
            <p className={`text-[${fontHolder}]`}>
              Lock your ERC20 team tokens
            </p>
            <p className={`text-[${fontHolder}]`}>
              Send tokens to someone else that are locked for a configurable
              period
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
