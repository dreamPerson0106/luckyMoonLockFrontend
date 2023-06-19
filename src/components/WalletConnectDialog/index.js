import React, { useEffect, useState } from "react";
import Dialog from "../Dialog";
import DialogHeader from "../Dialog/DialogHeader";
import DialogContent from "../Dialog/DialogContent";
import DialogFooter from "../Dialog/DialogFooter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";
import { addAddress } from "../../actions";
import { MetaMask, Coinbase, WalletConnect } from "../../assets/Icons";

const WalletConnectDialog = ({ modalState, closeModal, buttonRef }) => {
  const { font, fontHolder, background, backgroundHolder, button, hover } =
    useSelector((state) => state);
  const { ethereum } = window;
  const [walletAddress, setWalletAddress] = useState("CONNECT");
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");

  const dispatch = useDispatch();

  const convStr = (str) => {
    const temp =
      str.slice(0, 4) + "..." + str.slice(str.length - 3, str.length);
    return temp;
  };

  const connectMetaMask = async () => {
    if (typeof ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider
        .send("eth_requestAccounts", [])
        .then((res) => {
          console.log(res);
          const address = res[0].toString();
          dispatch(addAddress(address));
          setWalletAddress(convStr(address));
          setCurrentWalletAddress(address);
        })
        .catch((err) => toast.error(err.message));
    } else {
      toast.error("Please install MetaMask");
    }
  };

  return (
    <div className="z-10">
      <Dialog
        modalState={modalState}
        closeModal={closeModal}
        button={buttonRef}
        className="z-10"
      >
        <DialogHeader>
          <h1 className={`text-xl`}>Connect Your Wallet</h1>
        </DialogHeader>
        <DialogContent>
          <div className={`p-6 bg-[${background}]`}>
            <p className={`text-sm font-normal text-[${fontHolder}]`}>
              Suniswap works bests with MetaMask on all chains
            </p>
            <ul className="my-4 space-y-3">
              <li>
                <button
                  href="#"
                  onClick={connectMetaMask}
                  className={` w-full flex items-center p-3 text-base font-bold text-[${font}] rounded-lg group bg-[${button}] hover:bg-[${hover}] hover:shadow`}
                >
                  <MetaMask></MetaMask>
                  <span className="flex-1 ml-3 whitespace-nowrap text-start">
                    MetaMask
                  </span>
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className={` w-full flex items-center p-3 text-base font-bold text-[${font}] rounded-lg  group bg-[${button}] hover:bg-[${hover}] hover:shadow`}
                >
                  <Coinbase></Coinbase>
                  <span className="flex-1 ml-3 whitespace-nowrap text-start">
                    Coinbase Wallet
                  </span>
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className={` w-full flex items-center p-3 text-base font-bold text-[${font}] rounded-lg group bg-[${button}] hover:bg-[${hover}] hover:shadow`}
                >
                  <WalletConnect></WalletConnect>
                  <span className="flex-1 ml-3 whitespace-nowrap text-start">
                    WalletConnect
                  </span>
                </button>
              </li>
              <li></li>
            </ul>
          </div>
        </DialogContent>
        <DialogFooter>
          <div
            className={`bg-[${backgroundHolder}] flex justify-between px-5 text-[${fontHolder}] font-bold `}
          >
            <p>v1</p>
            <p>block 17477869</p>
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default WalletConnectDialog;
