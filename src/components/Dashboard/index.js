import React from "react";
import { useSelector } from "react-redux";
import { BinanceIcon, BitcoinIcon, EthereumIcon } from "../../assets/Icons";

const Dashboard = () => {
  const { font, fontHolder } = useSelector((state) => state);
  return (
    <div className=" container mx-auto pt-28">
      <div className="flex w-full justify-betweens">
        <div className="w-1/2">
          <h1 className={`text-2xl text-[${font}] mb-2`}>
            Popular LuckyMoon Locker
          </h1>
          <p className={`text-[${fontHolder}]`}>
            Lucky Moon Locker is a one-stop shop DeFi protocol providing 3 main
            services with several sub-features.
          </p>
        </div>
        <div className="flex items-center justify-between w-1/3">
          <div className="inline-flex items-center gap-3">
            <BinanceIcon width={35} height={35} />
            <span className={`text-[${fontHolder}]`}>$225.27</span>
          </div>
          <div className="inline-flex items-center gap-3">
            <EthereumIcon width={35} height={35} />
            <span className={`text-[${fontHolder}]`}>$225.27</span>
          </div>
          <div className="inline-flex items-center gap-3">
            <BitcoinIcon width={40} height={35} />
            <span className={`text-[${fontHolder}]`}>$225.27</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
