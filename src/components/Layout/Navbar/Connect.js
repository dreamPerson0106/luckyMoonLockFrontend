import React, { useEffect, useState } from "react";
import Cryptologo from "../../Logos/Cryptologo";
import "./navbar.css";
import { toast } from "react-hot-toast";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

function Connect() {
  const [walletAddress, setWalletAddress] = useState("CONNECT");
  const { ethereum } = window;

  detectEthereumProvider().then((provider) => {
    console.log(provider.isMetaMask);
  });

  console.log(ethereum.isMetaMask);

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    if (typeof ethereum !== "undefined") {
      await provider
        .send("eth_requestAccounts", [])
        .then((res) => {
          console.log(res);
          const address = res.toString();
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
      <button className="conbtn" onClick={connectWallet}>
        <Cryptologo width={11} height={18} />
        {walletAddress}
      </button>
    </>
  );
}

export default Connect;
