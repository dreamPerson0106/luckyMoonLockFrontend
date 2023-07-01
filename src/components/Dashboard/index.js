import React from "react";
import { useSelector } from "react-redux";
import {
  BinanceIcon,
  BitcoinIcon,
  EthereumIcon,
  LittleLockerIcon,
  LockedLiquidityTokenIcon,
  LockerIcon,
  NewLockIcon,
  RegularLockerIcon,
} from "../../assets/Icons";
import "./dashboard.css";
import { Link, useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const { font, fontHolder, background, hover, border } = useSelector(
    (state) => state
  );
  const data = useLoaderData();

  return (
    <div className=" container sm:px-10 lg:p-0 lg:max-w-7xl py-16 lg:py-16 mx-auto ">
      <div className="flex w-full flex-wrap	justify-betweens mb-16 gap-16 lg:gap-0">
        <div className="w-full lg:w-2/3">
          <h1 className={`text-2xl text-[${font}] mb-2 font-medium`}>
            Popular LuckyMoon Locker
          </h1>
          <p className={`text-[${fontHolder}]`}>
            Lucky Moon Locker is a one-stop shop DeFi protocol providing 3 main
            services with several sub-features.
          </p>
        </div>
        <div className={`flex items-center justify-between w-full lg:w-1/3`}>
          <div className="inline-flex items-center gap-3">
            <BitcoinIcon className={`w-9 h-9`} />
            <span className={`text-[${fontHolder}]`}>
              ${data["bitcoin"]["usd"]}
            </span>
          </div>
          <div className="inline-flex items-center gap-3">
            <EthereumIcon className={`w-9 h-9`} />
            <span className={`text-[${fontHolder}]`}>
              ${data["ethereum"]["usd"]}
            </span>
          </div>
          <div className="inline-flex items-center gap-3">
            <BinanceIcon className={`w-9 h-9`} />
            <span className={`text-[${fontHolder}]`}>
              ${data["binancecoin"]["usd"]}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-5/12 mb-10">
          <h3 className={`text-[${font}] text-xl pb-3`}>LuckyMoon Services</h3>
          <div className={`box bg-[${background}] border-[${border}]`}>
            <Link to="services">
              <div
                className={`flex gap-5 items-center hover:bg-[${hover}] px-2 py-1 rounded-md`}
              >
                <LockedLiquidityTokenIcon width={76} height={76} />
                <div>
                  <h3 className={`text-xl font-medium text-[${font}]`}>
                    Locked liquidities and tokens
                  </h3>
                  <p className={`text-[${fontHolder}]`}>
                    Read about all of our services.
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"tokenlocker"}>
              <div
                className={`flex gap-5 items-center hover:bg-[${hover}] px-2 py-1 rounded-md`}
              >
                <LockerIcon width={76} height={76} />
                <div>
                  <h3 className={`text-xl font-medium text-[${font}]`}>
                    token Besting
                  </h3>
                  <p className={`text-[${fontHolder}]`}>
                    Lock Liquidity tokens{" "}
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"tokenlocker"}>
              <div
                className={`flex gap-5 items-center hover:bg-[${hover}] px-2 py-1 rounded-md`}
              >
                <LockerIcon width={76} height={76} />
                <div>
                  <h3 className={`text-xl font-medium text-[${font}]`}>
                    Token Vesting
                  </h3>
                  <p className={`text-[${fontHolder}]`}>
                    Lock your ERC20 team tokens
                  </p>
                  <p className={`text-[${fontHolder}] break-normal`}>
                    Send tokens to someone else that are locked for a
                    configurable period
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex gap-2 items-end pb-2 px-3">
            <RegularLockerIcon width={32} height={32} color={font} />
            <h3 className={`text-[${font}] text-xl`}>
              {"New Liquidity Locks (>100k)"}
            </h3>
          </div>
          <div className={`box bg-[${background}] border-[${border}] `}>
            <Link to={`usdc hover:bg-[${hover}]`}>
              <div
                className={`flex gap-5 items-center text-xs w-full hover:bg-[${hover}] p-1 rounded-lg px-3`}
              >
                <NewLockIcon />
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className={`text-[${font}]`}>USDC</h3>
                    <p className={`text-[${fontHolder}]`}>KIRA</p>
                  </div>
                  <div>
                    <p className={`text-[${fontHolder}]`}>Liquidity</p>
                    <h3 className={`text-[${font}]`}>$352K</h3>
                  </div>
                  <div className="text-right ">
                    <h3 className={`text-[${font}] inline-flex gap-1`}>
                      <LittleLockerIcon width={12} height={14} />
                      <span className="text-[#1ECD84]">352K</span>
                    </h3>
                    <p className={`text-[${fontHolder}]`}>
                      99.9% - next in 5 months
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`usdc`}>
              <div
                className={`flex gap-5 items-center text-xs hover:bg-[${hover}] p-1 rounded-lg px-3`}
              >
                <NewLockIcon width={45} height={45} />
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className={`text-[${font}]`}>USDC</h3>
                    <p className={`text-[${fontHolder}]`}>KIRA</p>
                  </div>
                  <div>
                    <p className={`text-[${fontHolder}]`}>Liquidity</p>
                    <h3 className={`text-[${font}]`}>$352K</h3>
                  </div>
                  <div className="text-right text-[#1ECD84]">
                    <h3 className={`text-[${font}] inline-flex gap-1`}>
                      <LittleLockerIcon width={12} height={14} />
                      <span className="text-[#1ECD84]">352K</span>
                    </h3>
                    <p className={`text-[${fontHolder}]`}>
                      99.9% - next in 5 months
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={`usdc`}>
              <div
                className={`flex gap-5 items-center text-xs w-full hover:bg-[${hover}] p-1 rounded-lg px-3`}
              >
                <NewLockIcon width={45} height={45} />
                <div className="flex justify-between w-full">
                  <div>
                    <h3 className={`text-[${font}]`}>USDC</h3>
                    <p className={`text-[${fontHolder}]`}>KIRA</p>
                  </div>
                  <div>
                    <p className={`text-[${fontHolder}]`}>Liquidity</p>
                    <h3 className={`text-[${font}]`}>$352K</h3>
                  </div>
                  <div className="text-right text-[#1ECD84]">
                    <h3 className={`text-[${font}] inline-flex gap-1`}>
                      <LittleLockerIcon width={12} height={14} />
                      <span className="text-[#1ECD84]">352K</span>
                    </h3>
                    <p className={`text-[${fontHolder}]`}>
                      99.9% - next in 5 months
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
