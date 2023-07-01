import React from "react";
import Dialog from "../Dialog";
import DialogHeader from "../Dialog/DialogHeader";
import DialogContent from "../Dialog/DialogContent";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  EthLogo,
  AvaLogo,
  BSCLogo,
  DogeLogo,
  OneLogo,
  PolyLogo,
  XDaiLogo,
} from "../../assets/Icons";

const SwitchNetDialog = ({ modalState, closeModal, btnref }) => {
  const { fontHolder, background, button, hover, font } = useSelector(
    (state) => state
  );

  return (
    <Dialog modalState={modalState} closeModal={closeModal} button={btnref}>
      <DialogHeader>
        <h1 className={`text-xl`}>Switch Network</h1>
      </DialogHeader>
      <DialogContent className={`rounded-b-lg scroll-pb-10 bg-[${background}]`}>
        <div className="p-6">
          <ul className="my-4 space-y-3">
            <li>
              <button
                className={`w-full flex items-center p-3 text-base font-bold text-[${font}] rounded-lg bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] group hover:shadow`}
              >
                <EthLogo width={35} height={35}></EthLogo>
                <span className="flex-1 ml-3 whitespace-nowrap">Ethereum</span>
              </button>
            </li>

            <li>
              <button
                className={`w-full flex items-center p-3 text-base font-bold text-[${font}] rounded-lg bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] group hover:shadow`}
              >
                <BSCLogo width={35} height={35}></BSCLogo>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Binance Smart Chain
                </span>
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center p-3 text-base font-bold text-[${font}] rounded-lg bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] group hover:shadow`}
              >
                <PolyLogo width={35} height={35}></PolyLogo>
                <span className="flex-1 ml-3 whitespace-nowrap">Polygon</span>
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center p-3 text-base font-bold text-[${font}] rounded-lg bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] group hover:shadow`}
              >
                <XDaiLogo width={35} height={35}></XDaiLogo>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Goerli Test Chain
                </span>
              </button>
            </li>
            <li></li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SwitchNetDialog;
