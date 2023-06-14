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
  // Check connection when the component mounts
  useEffect(() => {
    if (!ethereum || !ethereum.isMetaMask) {
      return;
    }

    // Set the connection
    setConnection(provider);
  }, []);

  // On refresh, check connection again
  useEffect(() => {
    async function getSignerAddress () {
      const signer = await provider.getSigner()
      let string = (await signer.getAddress()).toString();
      setWalletAddress(
        string.slice(0, 4) +  
          "..." +
          string.slice(string.length - 3, string.length)
      );
    }
    if (!ethereum || !ethereum.isMetaMask) {
      return;
    }
    // Check if connection is still valid
    if (!connection) {
      setConnection(provider);
      getSignerAddress()
      
    }
})  

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
