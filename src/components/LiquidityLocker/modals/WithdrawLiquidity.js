import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dialog from "../../Dialog";
import DialogContent from "../../Dialog/DialogContent";
import { ethers } from "ethers";
import { LPTokenLockerABI } from "../../../assets/ABIs";
import { toast } from "react-toastify";

const LOCKER_ADDRESS = "0xfc2a975b8576d8bd57dbc3d55c10795de9944a82";

function WithdrawLiquidity({
  states,
  index,
  lockID,
  lpTokenAddress,
  decimals,
  close,
}) {
  const { font, fontHolder, background, border, button, hover } = useSelector(
    (state) => state.theme
  );

  const [withdrawValue, setWithdrawValue] = useState(0);

  const handleWithdraw = async () => {
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
        let withdraw = await lockerInstance.withdraw(
          lpTokenAddress,
          index,
          lockID,
          parseInt(withdrawValue * 10 ** decimals)
        );
        withdraw = await withdraw.wait(1);
        if (withdraw.status === 1) {
          close();
          toast.success("Withdraw success!");
        } else {
          toast.success("Withdraw Failed!");
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
        <div className="px-6 py-6 lg:px-8 shadow">
          <h3 className={`mb-4 text-xl font-medium text-[${font}]`}>
            Withdraw Liquidity
          </h3>
          <hr className={`border-[${border}] mb-5`}></hr>

          <div>
            <div
              className={`items-center bg-white p-2.5 rounded-md border-[${font}]`}
            >
              <input
                type="text"
                id="default-input"
                placeholder="Amount : 0"
                className={`text-right mb-2 mt-4  text-[${fontHolder}] text-sm rounded-lg  block w-full p-2.5`}
                disabled
              />
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  id="default-input"
                  placeholder="0"
                  className={` text-[${fontHolder}] text-sm rounded-lg  block w-[75%] p-2.5`}
                  value={withdrawValue}
                  onChange={(e) => setWithdrawValue(e.target.value)}
                />
                <button
                  id=""
                  className={` duration-500 ease-in-out justify-between text-[${fontHolder}] text-lg bg-[#1ECD84] hover:bg-[${hover}] focus:outline-none  font-medium rounded-md text-sm px-4 h-10 text-center inline-flex items-center `}
                  type="button"
                >
                  <div
                    className={`text-lg flex gap-2 items-center text-[${font}]`}
                  >
                    Max
                  </div>
                </button>
              </div>
            </div>
          </div>

          <button
            className={`w-full text-[${font}] bg-[${button}] hover:bg-[${hover}] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
            onClick={handleWithdraw}
          >
            Withdraw
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WithdrawLiquidity;
