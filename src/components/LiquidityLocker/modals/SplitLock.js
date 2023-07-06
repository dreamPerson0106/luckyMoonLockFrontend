import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Dialog from "../../Dialog";
import DialogContent from "../../Dialog/DialogContent";

function SplitLock({ states, close }) {
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
            Split Lock
          </h3>
          <hr className={`text-[${fontHolder}] mb-5`}></hr>
          <form className="space-y-6" action="#">
            <div>
              <label
                className={`block mb-4 text-sm font-medium text-[${font}]`}
              >
                Split this lock into another lock with speclifed amount. Usefull
                if you have one large lock thats about to become withdrawable
                and you’d like to split out say 10% and withdraw for marketing
                or some other usecase and relock the remaining 90%.
              </label>

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
                    className={`  text-[${fontHolder}] text-sm rounded-lg  block w-[75%] p-2.5`}
                  />
                  <button
                    id=""
                    className={`  justify-between text-[${fontHolder}] text-lg bg-[#1ECD84] hover:bg-[${hover}] focus:outline-none  font-medium rounded-md text-sm px-4 h-10 text-center inline-flex items-center `}
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
            <label
              className={`block mb-2 text-sm font-medium text-[${font}] text-center`}
            >
              Fee : 0.01 ETH
            </label>

            <button
              type="submit"
              className={`w-full text-[${font}] bg-[${button}] hover:bg-[${hover}] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
            >
              Create new Lock
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SplitLock;
