import React from "react";
import { useSelector } from "react-redux";
import {
  LaunchPadIcon,
  LockedLiquidityTokenIcon,
  Tokenlocker,
  TokenminterIcon,
} from "../../assets/Icons";
import "./service.css";
import { Link } from "react-router-dom";

const Services = () => {
  const { font, fontHolder, background, backgroundHolder, border, hover } =
    useSelector((state) => state);

  return (
    <div className={`container max-w-2xl text-[${font}] py-12 mx-auto`}>
      <h1 className="text-center text-5xl mb-4">Our Services</h1>
      <div className="flex justify-between text-lg text-bold p-4">
        <Link
          to={`viewliquidity`}
          className={`hover:border-[${border}] hover:border-b-[1px]`}
        >
          <p>Liquidity Locker</p>
        </Link>{" "}
        <Link
          to={`viewliquidity`}
          className={`hover:border-[${border}] hover:border-b-[1px]`}
        >
          <p>Token Locker</p>
        </Link>{" "}
        <Link
          to={`viewliquidity`}
          className={`hover:border-[${border}] hover:border-b-[1px]`}
        >
          <p>Token minter</p>
        </Link>
      </div>
      <div className={`serviceBox border-[${border}] bg-[${background}]`}>
        <Link to="liqlock">
          <div
            className={`flex py-2 items-center gap-3 hover:bg-[${hover}] px-2 rounded-lg`}
          >
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
        </Link>
        <hr className={`text-[${backgroundHolder}]`} />
        <Link to="tokenminter">
          <div
            className={`flex py-2 items-center gap-3 hover:bg-[${hover}] px-2 rounded-lg`}
          >
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
        </Link>
        <hr className={`text-[${backgroundHolder}]`} />
        <Link to="/tokenlocker">
          <div
            className={`flex py-2 items-center gap-3 hover:bg-[${hover}] px-2 rounded-lg`}
          >
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
        </Link>
      </div>
    </div>
  );
};

export default Services;
