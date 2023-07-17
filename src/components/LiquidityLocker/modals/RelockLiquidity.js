import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Dialog from "../../Dialog";
import DialogContent from "../../Dialog/DialogContent";
import { toast } from "react-toastify";
import TimePicker from "../../TokenLocker/TimePicker";
import { ethers } from "ethers";
import { LPTokenLockerABI } from "../../../assets/ABIs";

const LOCKER_ADDRESS = "0xfc2a975b8576d8bd57dbc3d55c10795de9944a82";

function RelockLiquidity({ states, index, lockID, lpTokenAddress, close }) {
  const { font, fontHolder, background, border, button, hover } = useSelector(
    (state) => state.theme
  );
  const [relockDate, setRelockDate] = useState(new Date());

  const { contract } = useSelector((state) => state.web3);

  const handleRelock = async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const lockerInstance = new ethers.Contract(
          LOCKER_ADDRESS,
          LPTokenLockerABI,
          signer
        );
        let relock = await lockerInstance.relock(
          lpTokenAddress,
          index,
          lockID,
          parseInt(relockDate.getTime() / 1000)
        );
        relock = await relock.wait(1);
        if (relock.status === 1) {
          close();
          toast.success("Relock success!");
        } else {
          toast.success("Relock Failed!");
        }
      } catch (err) {
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    } else toast.warn("Metamask is not detected!");
  };
  return (
    <Dialog modalState={states} closeModal={close}>
      <DialogContent
        className={`rounded-2xl border-[${border}] border-[1px] bg-[${background}]`}
      >
        <div className="px-6 py-6 lg:px-8">
          <h3 className={`mb-4 text-xl font-medium text-[${font}]`}>
            Relock Liquidity
          </h3>
          <hr className={`border-[${border}] mb-5`}></hr>
          <form className="space-y-6" action="#">
            <div>
              <label
                className={`block mb-2 text-sm font-medium text-[${font}]`}
              >
                Current Lock Date
              </label>
              <label
                className={`block mb-2 text-sm font-medium text-[${font}]`}
              >
                Thu 8 Jun, 2023 | 22:35
              </label>
              <label
                className={`block mb-2 text-sm font-medium text-[${font}]`}
              >
                New Unlock Date
              </label>
              <TimePicker
                dateMoment={relockDate}
                setDateMoment={(moment) => setRelockDate(new Date(moment))}
              />
            </div>

            <button
              type="submit"
              className={`w-full text-[${font}] bg-[${button}] hover:bg-[${hover}] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
              onClick={handleRelock}
            >
              Relock
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RelockLiquidity;
