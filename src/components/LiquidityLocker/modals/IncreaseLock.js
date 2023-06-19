import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function IncreaseLock({ close }) {
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
      id="increaselock-modal"
      tabIndex="-1"
      aria-hidden="true"
      className=" rounded-lg fixed center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className=" mx-auto my-52 relative w-full max-w-lg max-h-full">
        <div className={`relative bg-[${background}] rounded-lg shadow`}>
          <button
            type="button"
            className={`absolute top-3 right-2.5 text-[${font}] bg-transparent hover:bg-[${backgroundHolder}] hover:text-[${fontHolder}] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center`}
            data-modal-hide="increaselock-modal"
            onClick={close}
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
              Increase Lock
            </h3>
            <hr className={`text-[${fontHolder}] mb-5`}></hr>
            <form className="space-y-6" action="#">
              <div>
                <div
                  className={`items-center bg-white p-2.5 rounded-md border-[${font}]`}
                >
                  <input
                    type="text"
                    id="default-input"
                    placeholder="Amount : 0"
                    className={`text-right mb-2 mt-4 bg-[${mainBg}]  text-[${fontHolder}] text-sm rounded-lg  block w-full p-2.5`}
                    disabled
                  />
                  <div className="flex justify-between items-center">
                    <input
                      type="text"
                      id="default-input"
                      placeholder="0"
                      className={`bg-[${mainBg}]  text-[${fontHolder}] text-sm rounded-lg  block w-[75%] p-2.5`}
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
                1% fee on relocks
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className={`text-[${font}] bg-[${font}] hover:bg-[${fontHolder}] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
                >
                  Approve
                </button>
                <button
                  className={`text-[${font}] bg-[${button}] hover:bg-[${hover}] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center `}
                >
                  Lock
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncreaseLock;
