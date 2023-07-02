import React, { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BSCLogo, EthLogo, PolyLogo } from "../../assets/Icons";

const SwitchNetButton = forwardRef((props, ref) => {
  const { fontHolder, button, hover, font, chain } = useSelector(
    (state) => state
  );

  const [network, setNetwork] = useState({
    title: "Ethereum",
    icon: <EthLogo width={35} height={35} />,
    chain: "0x1",
  });

  function filter(array, value, key) {
    return array.filter(
      key
        ? (a) => a[key] === value
        : (a) => Object.keys(a).some((k) => a[k] === value)
    );
  }
  const chain_list = [
    {
      title: "Ethereum",
      icon: <EthLogo width={35} height={35} />,
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
      icon: <EthLogo width={35} height={35} />,
      chain: "0x5",
    },
  ];
  useEffect(() => {
    setNetwork(filter(chain_list, chain)[0]);
  }, [chain]);
  return (
    <button
      id="dropdownDividerButton"
      data-dropdown-toggle="dropdownDivider"
      className={`w-full justify-between text-[${fontHolder}] text-lg bg-[${button}] hover:bg-[${hover}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center `}
      type="button"
      ref={ref}
      onClick={props.state}
    >
      <div className={`text-lg flex gap-2 items-center text-[${font}]`}>
        {}
        {network.icon}
        {network.title}
      </div>
    </button>
  );
});

export default SwitchNetButton;
