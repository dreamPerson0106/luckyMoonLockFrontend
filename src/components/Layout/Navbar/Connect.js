import React, { useEffect, useRef, useState } from "react";
import { Cryptologo } from "../../../assets/Icons";
import "./navbar.css";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  changeChain,
  convAddress,
  removeAddress,
} from "../../../actions";
import WalletConnectDialog from "../../WalletConnectDialog";
import { toast } from "react-toastify";
import RippleButton from "../../Elements/RippleButton";

function Connect({ className }) {
  const [walletDialogStatus, setWalletDialogStatus] = useState(false);
  const [walletAddress, setWalletAddress] = useState("CONNECT");
  const [connection, setConnection] = useState(null);
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");
  const [firstLoginTime, setFirstLoginTime] = useState();
  const btnSelf = useRef(null);
  const { ethereum } = window;
  const { button, hover, font, border } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  let provider;

  try {
    let temp_provider = new ethers.providers.Web3Provider(window.ethereum);
    provider = temp_provider;
  } catch (error) {
    let temp_provider = null;
    provider = temp_provider;
  }

  const convStr = (str) => {
    const temp =
      str.slice(0, 4) + "..." + str.slice(str.length - 3, str.length);
    return temp;
  };

  // On refresh, check connection again
  useEffect(() => {
    async function getSignerAddress() {
      try {
        const signer = await provider.getSigner().getAddress();
        let string = signer.toString();
        dispatch(addAddress(string));
        dispatch(convAddress(convStr(string)));
        setWalletAddress(
          string.slice(0, 4) +
            "..." +
            string.slice(string.length - 3, string.length)
        );
      } catch (error) {
        toast.warn("Metamask is not detected.");
      }
    }

    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", async (accounts) => {
        if (
          (await provider.getSigner()) &&
          currentWalletAddress === window.ethereum.selectedAddress &&
          window.ethereum.selectedAddress
        ) {
          toast.success("Found your wallet address!");
          setWalletAddress(convStr(window.ethereum.selectedAddress));
        } else if (
          (await provider.getSigner()) &&
          currentWalletAddress !== window.ethereum.selectedAddress &&
          window.ethereum.selectedAddress
        ) {
          setWalletAddress(convStr(window.ethereum.selectedAddress));
        } else {
          toast.warn("Wallet Disconnected!");
          setWalletAddress("CONNECT");
          dispatch(removeAddress());
        }
        setCurrentWalletAddress(window.ethereum.selectedAddress);
      });
      window.ethereum.on("chainChanged", (chainId) => {
        dispatch(changeChain(chainId));
      });
    }

    if (!ethereum || !ethereum.isMetaMask) {
      return;
    }

    let currentTime = new Date().getTime();
    let storedFirstLoginTime = localStorage.getItem("firstLoginTime");
    if (storedFirstLoginTime) {
      if (currentTime - storedFirstLoginTime > 0.1 * 60 * 1000) {
        //disconnect wallet
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
      setConnection(provider);
      getSignerAddress();
    }
  }, []);

  const connectWallet = async () => {
    setWalletDialogStatus(!walletDialogStatus);
  };
  return (
    <div {...className}>
      <RippleButton
        ButtonTitle={walletAddress}
        className={`ripple focus:ring-0 transition duration-500 ease-in-out conbtn bg-[${button} text-[${font}] border-[${border}] hover:bg-[${hover}] rounded-md`}
        onClick={connectWallet}
        ref={btnSelf}
      >
        <Cryptologo width={11} height={18} color={font} />
        {walletAddress}
      </RippleButton>

      <WalletConnectDialog
        className="z-20"
        modalState={walletDialogStatus}
        closeModal={() => {
          setWalletDialogStatus(false);
        }}
        buttonRef={btnSelf}
      />
    </div>
  );
}

export default Connect;
