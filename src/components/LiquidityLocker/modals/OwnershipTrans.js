import React from "react";
import { useSelector } from "react-redux";
import Dialog from "../../Dialog";
import DialogContent from "../../Dialog/DialogContent";

function OwnershipTrans({ states, close }) {
  const { font, fontHolder, background, border, button, hover } = useSelector(
    (state) => state.theme
  );
  return (
    <Dialog modalState={states} closeModal={close}>
      <DialogContent
        className={`rounded-2xl border-[${border}] border-[1px] bg-[${background}]`}
      >
        <div className="px-6 py-6 lg:px-8">
          <h3 className={`mb-4 text-xl font-medium text-[${font}]`}>
            Transfer Ownership
          </h3>
          <hr className={`text-[${fontHolder}] mb-5`}></hr>
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
              />
            </div>

            <button
              type="submit"
              className={`w-full text-[${font}] bg-[${button}] hover:bg-[${hover}] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
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
