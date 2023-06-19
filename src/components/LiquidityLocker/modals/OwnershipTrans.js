import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function OwnershipTrans({ close }) {
  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    border,
    button,
    hover,
    wallet_address,
    mainBg,
  } = useSelector((state) => state);
  const modal = useRef();
  const [modalStatus, setModalStatus] = useState(false);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        // browser_menu.current &&
        // !browser_menu.current.contains(event.target) &&
        modal.current &&
        !modal.current.contains(event.target)
      ) {
        // Clicked outside the div
        setModalStatus(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modal]);
  return (
    <div
      ref={modal}
      id="ownershiptrans-modal"
      tabIndex="-1"
      aria-hidden="true"
      className=" rounded-lg fixed center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className=" mx-auto my-52 relative w-full max-w-lg max-h-full">
        <div className={`relative bg-[${background}] rounded-lg shadow`}>
          <button
            type="button"
            className={`absolute top-3 right-2.5 text-[${font}] bg-transparent hover:bg-[${backgroundHolder}] hover:text-[${fontHolder}] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center`}
            data-modal-hide="ownershiptrans-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className={`mb-4 text-xl font-medium text-[${font}]`}>
              Transfer Ownership
            </h3>
            <hr className={`text-[${fontHolder}] mb-5`}></hr>
            <form className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="newOwner"
                  className={`block mb-2 text-sm font-medium text-[${font}]`}
                >
                  Transfer this lock to a new owner. The specified address will
                  be able to withdraw the LookyMoon v2 token once the unlock
                  date is reached.
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
        </div>
      </div>
    </div>
  );
}

export default OwnershipTrans;
