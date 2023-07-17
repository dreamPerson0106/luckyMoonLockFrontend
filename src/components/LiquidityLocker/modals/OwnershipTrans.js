import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dialog from "../../Dialog";
import DialogContent from "../../Dialog/DialogContent";
import { ethers } from "ethers";
import { LPTokenLockerABI } from "../../../assets/ABIs";
import { toast } from "react-toastify";

const LOCKER_ADDRESS = "0xfc2a975b8576d8bd57dbc3d55c10795de9944a82";

function OwnershipTrans({
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

  const [newOwner, setNewOwner] = useState("");

  const handleTransferOwnerShip = async () => {
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
        let transferLockOwnership = await lockerInstance.transferLockOwnership(
          lpTokenAddress,
          index,
          lockID,
          newOwner
        );
        transferLockOwnership = await transferLockOwnership.wait(1);
        if (transferLockOwnership.status === 1) {
          close();
          toast.success("Split Success!");
        } else {
          toast.success("Split Failed!");
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
            Transfer Ownership
          </h3>
          <hr className={`border-[${border}] mb-5`}></hr>
          <form className="space-y-6" action="#">
            <div>
              <label
                className={`block mb-2 text-sm font-medium text-[${font}]`}
              >
                Transfer this lock to a new owner. The specified address will be
                able to withdraw the LookyMoon v2 token once the unlock date is
                reached.
              </label>
              <input
                type="text"
                name="newOwner"
                id="newOwner"
                className={`focus:ring-1 focus:outline-none  bg-[${font}] border border-[${border}] text-[${font}] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                placeholder="New Owner Address"
                required
                value={newOwner}
                onChange={(e) => {
                  setNewOwner(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className={`w-full text-[${font}] bg-[${button}] hover:bg-[${hover}] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
              onClick={handleTransferOwnerShip}
            >
              Transfer
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default OwnershipTrans;
