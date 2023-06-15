import React, { useEffect, useState } from "react";
import { Cryptologo } from "../../../assets/Icons";
import "./navbar.css";
import { toast } from "react-hot-toast";
// import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../../actions";
// import Web3 from "web3";

function Connect() {
  const [walletAddress, setWalletAddress] = useState("CONNECT");
  const [connection, setConnection] = useState(null);
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");
  const [firstLoginTime, setFirstLoginTime] = useState();
  const { ethereum } = window;
  const { button, hover, font, background, backgroundHolder } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  let provider = new ethers.providers.Web3Provider(window.ethereum);

  const convStr = (str) => {
    const temp =
      str.slice(0, 4) + "..." + str.slice(str.length - 3, str.length);
    return temp;
  };
 

  window.ethereum.on("accountsChanged", async (accounts) => {
    if (
      (await provider.getSigner()) &&
      currentWalletAddress === window.ethereum.selectedAddress &&
      window.ethereum.selectedAddress
    ) {
      console.log("Found the address");
      setWalletAddress(convStr(window.ethereum.selectedAddress));
    } else if (
      (await provider.getSigner()) &&
      currentWalletAddress !== window.ethereum.selectedAddress &&
      window.ethereum.selectedAddress
    ) {
      setWalletAddress(convStr(window.ethereum.selectedAddress));
    } else {
      console.log("disconnected");
      setWalletAddress("CONNECT");
    }
    setCurrentWalletAddress(window.ethereum.selectedAddress);
  });

  // On refresh, check connection again
  useEffect(() => {
    async function getSignerAddress() {
      try {
        const signer = await provider.getSigner().getAddress();
        let string = signer.toString();
        setWalletAddress(
          string.slice(0, 4) +
            "..." +
            string.slice(string.length - 3, string.length)
        );
      } catch (error) {
        toast.error("Couldn't find your wallet address");
      }
    }

    if (!ethereum || !ethereum.isMetaMask) {
      return;
    }

    let currentTime = new Date().getTime();
    let storedFirstLoginTime = localStorage.getItem("firstLoginTime");
    if (storedFirstLoginTime) {
      if (currentTime - storedFirstLoginTime > 0.1 * 60 * 1000) {
        //disconnect wallet
        console.log(currentTime - storedFirstLoginTime);
        localStorage.setItem("firstLoginTime", currentTime);
        provider = new ethers.providers.Web3Provider(window.ethereum);
        setWalletAddress("CONNECT");
        setConnection(null);
      } else {
        setFirstLoginTime(storedFirstLoginTime);
      }
    } else {
      localStorage.setItem("firstLoginTime", currentTime);
      setFirstLoginTime(currentTime);
    }

    // Check if connection is still valid
    if (!connection) {
      console.log("checking connection");
      setConnection(provider);
      getSignerAddress();
    }
  });

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    if (typeof ethereum !== "undefined") {
      await provider
        .send("eth_requestAccounts", [])
        .then((res) => {
          console.log(res);
          const address = res[0].toString();
          dispatch(addAddress(address));
          setWalletAddress(
            convStr(address)
          );
          setCurrentWalletAddress(address);
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
