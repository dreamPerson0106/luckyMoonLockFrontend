import React, { useEffect, useState } from "react";
import { Cryptologo } from "../../../assets/Icons";
import "./navbar.css";
import { toast } from "react-hot-toast";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../../actions";

function Connect() {
  const [walletAddress, setWalletAddress] = useState("CONNECT");
  const { ethereum } = window;
  const { button, hover, font, background, backgroundHolder } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  detectEthereumProvider().then((provider) => {
    console.log(provider.isMetaMask);
  });

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    if (typeof ethereum !== "undefined") {
      await provider
        .send("eth_requestAccounts", [])
        .then((res) => {
          const address = res[0].toString();
          dispatch(addAddress(address));
          setWalletAddress(
            address.slice(0, 4) +
              "..." +
              address.slice(address.length - 3, address.length)
          );
        })
        .catch((err) => toast.error(err.message));
    } else {
      toast.error("Please install MetaMask");
    }
  };
  return (
    <>
      <button
        className={`conbtn bg-[${button}] text-[${font}] border-[${backgroundHolder}] hover:bg-[${hover}]`}
        onClick={connectWallet}
      >
        <Cryptologo width={11} height={18} color={font} />
        {walletAddress}
      </button>
    </>
  );
}

export default Connect;
