import React from "react";
import { useSelector } from "react-redux";

const Dialog = ({ children, modalState, closeModal, button }) => {
  const { background, fontHolder } = useSelector((state) => state);

  const modal = React.useRef(null);
  const closeBtn = React.useRef(null);

  React.useEffect(() => {
    function handleOutsideClick(event) {
      if (
        modal.current &&
        !modal.current.contains(event.target) &&
        button.current &&
        !button.current.contains(event.target)
      ) {
        // Clicked outside the div
        closeModal();
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modal]);

  if (modalState) {
    return (
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="fixed mt-20 top-0 left-0 right-0 z-10 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(80%)] max-h-full"
      >
        <div className=" flex justify-center w-full h-full max-h-[96%]">
          <div className="relative w-full max-w-2xl py-6" ref={modal}>
            <button
              type="button"
              className={`z-20 absolute top-8 right-2.5 text-gray-400 bg-transparent rounded-full hover:bg-[${background}] hover:text-[#FC5252] text-sm p-1.5 ml-auto inline-flex items-center`}
              ref={closeBtn}
              onClick={closeModal}
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
            {children}
          </div>
        </div>
      </div>
    );
  }
};

export default Dialog;
