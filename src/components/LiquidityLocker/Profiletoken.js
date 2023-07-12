import React from "react";

import { useSelector } from "react-redux";
import { EthLogo } from "../../assets/Icons";

function Profiletoken() {
  const {
    font,
    button,
    mainBg,
    buttonHolder,
    fontHolder,
    border,
    backgroundHolder,
    hover,
  } = useSelector((state) => state.theme);
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 10) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="px-5 pb-5">
      <input
        type="text"
        placeholder="Lookymoon V2 – Goerli pair address…"
        className={`bg-[${mainBg}]  text-[${fontHolder}] text-sm rounded-lg  block w-full p-2.5 bg-[${backgroundHolder}]`}
      />
      <hr className={`my-3 border-[${border}]`}></hr>
      <div className="mx-auto flex items-center gap-8">
        <div className="flex mx-auto">
          <button
            className={`duration-500 ease-in-out w-20 flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-[${font}] bg-[${button}] border-[1px] border-[${border}] rounded-md hover:bg-[${buttonHolder}] hover:text-[${fontHolder}]`}
          >
            First
          </button>
          <button
            className={`duration-500 ease-in-out w-20 flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-[${font}] bg-[${button}] border-[1px] border-[${border}] rounded-md hover:bg-[${buttonHolder}] hover:text-[${fontHolder}]`}
          >
            Previous
          </button>
          <p className={`text-[${font}]`}>1-10 / 1000</p>
          <button
            className={`duration-500 ease-in-out w-20 flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-[${font}] bg-[${button}] border-[1px] border-[${border}] rounded-md hover:bg-[${buttonHolder}] hover:text-[${fontHolder}]`}
          >
            Next
          </button>
          <button
            className={`duration-500 ease-in-out w-20 flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-[${font}] bg-[${button}] border-[1px] border-[${border}] rounded-md hover:bg-[${buttonHolder}] hover:text-[${fontHolder}]`}
          >
            Last
          </button>
        </div>
      </div>
      <hr className={`my-3 border-[${border}]`}></hr>

      <button
        className={`my-1 w-full rounded-md text-[${font}] bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div>
            <div className={`flex justify-start gap-5 items-center mt-1`}>
              <EthLogo className={`w-6`} />
              <p className={`text-lg z-100 hover:bg-[${button}] rounded-sm`}>
                WETH
              </p>
            </div>
            <p className="text-sm font-bold  mt-1">#1 Wrapped Ether</p>
            <p className="text-sm  mt-1">Pair index:</p>
          </div>
          <div>
            <p className="text-lg font-bold">$ 1,814</p>
            <p className="text-sm font-bold">vol: $143.55M</p>
            <p className="text-sm">dmcap:$6.22B</p>
          </div>
        </div>
      </button>
      <button
        className={`my-1 w-full rounded-md text-[${font}] bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div>
            <div className={`flex justify-start gap-5 items-center mt-1`}>
              <EthLogo className={`w-6`} />
              <p className={`text-lg z-100 hover:bg-[${button}] rounded-sm`}>
                WETH
              </p>
            </div>
            <p className="text-sm font-bold  mt-1">#1 Wrapped Ether</p>
            <p className="text-sm  mt-1">Pair index:</p>
          </div>
          <div>
            <p className="text-lg font-bold">$ 1,814</p>
            <p className="text-sm font-bold">vol: $143.55M</p>
            <p className="text-sm">dmcap:$6.22B</p>
          </div>
        </div>
      </button>
      <button
        className={`my-1 w-full rounded-md text-[${font}] bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div>
            <div className={`flex justify-start gap-5 items-center mt-1`}>
              <EthLogo className={`w-6`} />
              <p className={`text-lg z-100 hover:bg-[${button}] rounded-sm`}>
                WETH
              </p>
            </div>
            <p className="text-sm font-bold  mt-1">#1 Wrapped Ether</p>
            <p className="text-sm  mt-1">Pair index:</p>
          </div>
          <div>
            <p className="text-lg font-bold">$ 1,814</p>
            <p className="text-sm font-bold">vol: $143.55M</p>
            <p className="text-sm">dmcap:$6.22B</p>
          </div>
        </div>
      </button>
      <button
        className={`my-1 w-full rounded-md text-[${font}] bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div>
            <div className={`flex justify-start gap-5 items-center mt-1`}>
              <EthLogo className={`w-6`} />
              <p className={`text-lg z-100 hover:bg-[${button}] rounded-sm`}>
                WETH
              </p>
            </div>
            <p className="text-sm font-bold  mt-1">#1 Wrapped Ether</p>
            <p className="text-sm  mt-1">Pair index:</p>
          </div>
          <div>
            <p className="text-lg font-bold">$ 1,814</p>
            <p className="text-sm font-bold">vol: $143.55M</p>
            <p className="text-sm">dmcap:$6.22B</p>
          </div>
        </div>
      </button>

      <hr className={`my-3 border-[${border}]`}></hr>
      <div className="mx-auto flex items-center gap-8">
        <div className="flex mx-auto">
          <button
            className={`duration-500 ease-in-out w-20 flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-[${font}] bg-[${button}] border-[1px] border-[${border}] rounded-md hover:bg-[${buttonHolder}] hover:text-[${fontHolder}]`}
          >
            First
          </button>
          <button
            className={`duration-500 ease-in-out w-20 flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-[${font}] bg-[${button}] border-[1px] border-[${border}] rounded-md hover:bg-[${buttonHolder}] hover:text-[${fontHolder}]`}
          >
            Previous
          </button>
          <p className={`text-[${font}]`}>1-10 / 1000</p>
          <button
            className={`duration-500 ease-in-out w-20 flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-[${font}] bg-[${button}] border-[1px] border-[${border}] rounded-md hover:bg-[${buttonHolder}] hover:text-[${fontHolder}]`}
          >
            Next
          </button>
          <button
            className={`duration-500 ease-in-out w-20 flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-[${font}] bg-[${button}] border-[1px] border-[${border}] rounded-md hover:bg-[${buttonHolder}] hover:text-[${fontHolder}]`}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profiletoken;
