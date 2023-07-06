import React, { useState } from "react";
import Dialog from "../Dialog";
import DialogHeader from "../Dialog/DialogHeader";
import DialogContent from "../Dialog/DialogContent";
import DialogFooter from "../Dialog/DialogFooter";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { addAddress } from "../../actions";
import { MetaMask, Coinbase, WalletConnect } from "../../assets/Icons";

const WalletConnectDialog = ({ modalState, closeModal, buttonRef }) => {
  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    button,
    border,
    hover,
  } = useSelector((state) => state.theme);
  const { wallet_address } = useSelector((state) => state.web3);
  const { ethereum } = window;
  const [walletAddress, setWalletAddress] = useState("CONNECT");
  // const [currentWalletAddress, setCurrentWalletAddress] = useState("");

  const dispatch = useDispatch();

  // const convStr = (str) => {
  //   const temp =
  //     str.slice(0, 4) + "..." + str.slice(str.length - 3, str.length);
  //   return temp;
  // };

  const connectMetaMask = async () => {
    if (typeof ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider
        .send("eth_requestAccounts", [])
        .then((res) => {
          const address = res[0].toString();
          dispatch(addAddress(address));
        })
        .catch((err) =>
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        );
    } else {
      toast.error("Please install MetaMask", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <Dialog
        modalState={modalState}
        closeModal={closeModal}
        button={buttonRef}
        className="z-10"
      >
        <DialogHeader>
          <h1 className={`text-xl`}>
            {wallet_address === ""
              ? "Connect Your Wallet"
              : "Your Wallet Address Is"}
          </h1>
        </DialogHeader>
        <DialogContent>
          {wallet_address !== "" ? (
            <div
              className={`text-[${font}] bg-[${background}] px-6 py-20 text-center text-lg`}
            >
              {wallet_address}
            </div>
          ) : (
            <div className={`p-6 bg-[${background}]`}>
              <p className={`text-sm font-normal text-[${fontHolder}]`}>
                Suniswap works bests with MetaMask on all chains
              </p>
              <ul className="my-4 space-y-3">
                <li>
                  <button
                    onClick={() => {
                      setTimeout(() => {
                        closeModal();
                      }, 300);
                      connectMetaMask();
                    }}
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
          )}
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
