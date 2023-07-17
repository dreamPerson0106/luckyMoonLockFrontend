import React from "react";
import Dialog from "../Dialog";
import DialogHeader from "../Dialog/DialogHeader";
import DialogContent from "../Dialog/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { EthLogo, BSCLogo, PolyLogo } from "../../assets/Icons";
import { toast } from "react-toastify";
import { changeChain } from "../../actions";

const SwitchNetDialog = ({ modalState, closeModal, btnref }) => {
  const { fontHolder, background, button, hover, font } = useSelector(
    (state) => state.theme
  );
  const dispatch = useDispatch();

  const SwitchChainToPolygon = (chain) => () => {
    const { ethereum } = window;
    if (ethereum) {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: chain }],
            });
            dispatch(changeChain(chain));
            toast.success("You have switched to the right network");
            if (ethereum.chainId !== chain) closeModal();
          } catch (switchError) {
            // The network has not been added to MetaMask
            if (switchError.code === 4902) {
              toast.error("Please add the Polygon network to MetaMask");
            }
            toast.error(switchError.message);
          }
        })
        .catch((err) => toast.error(err));
    } else {
      toast.error("Please install MetaMask");
    }
  };

  const chain = [
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

  return (
    <Dialog modalState={modalState} closeModal={closeModal} button={btnref}>
      <DialogHeader>
        <h1 className={`text-xl`}>Switch Network</h1>
      </DialogHeader>
      <DialogContent className={`rounded-b-lg scroll-pb-10 bg-[${background}]`}>
        <div className="p-6">
          <ul className="my-4 space-y-3">
            {chain.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    className={`duration-500 ease-in-out w-full flex items-center p-3 text-base font-bold text-[${font}] rounded-lg bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] group hover:shadow`}
                    chain-data={item.chain}
                    onClick={SwitchChainToPolygon(item.chain)}
                  >
                    {item.icon}
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SwitchNetDialog;
