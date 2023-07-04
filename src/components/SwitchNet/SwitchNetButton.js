import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { BSCLogo, EthLogo, PolyLogo } from "../../assets/Icons";

const SwitchNetButton = forwardRef(({ className, state }, ref) => {
  const { font, chain } = useSelector((state) => state);

  const chain_list = [
    {
      title: "Ethereum",
      icon: <EthLogo className={`w-9 h-9`} />,
      chain: "0x1",
    },
    {
      title: "Binance Smart Chain",
      icon: <BSCLogo width={35} height={35} />,
      chain: "0x38",
    },
    {
      title: "Polygon",
      icon: <PolyLogo width={35} height={35} />,
      chain: "0x89",
    },
    {
      title: "Goerli Test Chain",
      icon: <EthLogo className={`w-9 h-9`} />,
      chain: "0x5",
    },
  ];

  const network = chain_list.find((chains) => chains.chain === chain);

  return (
    <button className={className} type="button" ref={ref} onClick={state}>
      <div className={`text-lg flex gap-2 items-center text-[${font}]`}>
        {network && network.icon}
        {network && network.title}
      </div>
    </button>
  );
});

export default SwitchNetButton;
