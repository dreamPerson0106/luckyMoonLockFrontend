import React, { useEffect, useState } from "react";
import Cryptologo from "../../Logos/Cryptologo";
import "./navbar.css";
import { toast } from "react-hot-toast";
// import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../actions/index";
// import Web3 from "web3";

function Connect() {
  const [walletAddress, setWalletAddress] = useState("CONNECT");
  const [connection, setConnection] = useState(null);
  const [firstLoginTime, setFirstLoginTime] = useState();
  const { ethereum } = window;
  const dispatch = useDispatch();

  let alerted = false;
  window.ethereum.on("accountsChanged", async () => {
    if (!alerted) {
      alert("kkkkk");
      alerted = true;
    }
  });

  let provider = new ethers.providers.Web3Provider(window.ethereum);

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
        toast.error("Couldn't find your wallet address")
      }
    }

    let currentTime = new Date().getTime();
    let storedFirstLoginTime = localStorage.getItem('firstLoginTime');
    if (storedFirstLoginTime) {
      // setFirstLoginTime(storedFirstLoginTime);
      // localStorage.setItem('firstLoginTime', currentTime);
      if(currentTime - storedFirstLoginTime > (0.1 * 60 * 1000)){
        //disconnect wallet
        console.log("sdfsdfadsf");
        localStorage.setItem('firstLoginTime', currentTime);
      }else{
        setFirstLoginTime(storedFirstLoginTime);
        // localStorage.setItem('firstLoginTime', currentTime);
      }
      
    } else {
      localStorage.setItem('firstLoginTime', currentTime);
      setFirstLoginTime(currentTime);
    }

    if (!ethereum || !ethereum.isMetaMask) {
      return;
    }

    // Check if connection is still valid
    if (!connection) {
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
