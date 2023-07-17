import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EthLogo } from "../../assets/Icons";

function Profileliquidity() {
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
  return (
    <div className="px-5 pb-5">
      <p className={`text-center text-[${font}] text-3xl font-bold`}>$91.74M</p>
      <p className={`text-center text-[${font}] text-sm`}>
        total value locked in 34318 pairs
      </p>
      <div className={`text-center my-3 mb-8`}>
        <Link
          to={"#"}
          className={`bg-[#1ECD84] p-2 rounded-md text-lg text-[#e3e9f1] w-full `}
        >
          Lock / Withdraw Liquidity
        </Link>
      </div>
      <input
        type="text"
        placeholder="Lookymoon V2 – Goerli pair address…"
        className={`bg-[${mainBg}]  text-[${fontHolder}] text-sm rounded-lg  block w-full p-2.5 bg-[${backgroundHolder}]`}
      />
      <hr className={`my-3 border-[${border}]`}></hr>
      <div className="mx-auto flex items-center gap-8">
        <div className="flex mx-auto items-center">
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
            <div className={`flex justify-start items-center mt-1 gap-3`}>
              <div className="flex gap-1">
                <EthLogo className={`w-6`} />
                <EthLogo className={`w-6`} />
              </div>
              <p className={`text-lg rounded-sm`}>FLOKI / WETH</p>
            </div>
            <p className="text-sm  mt-1">
              Liquidity: <span className="font-bold">(105.47 B / 1.4 K)</span>
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">$ 4.75M</p>
            <p className="text-sm">Next in 263 years</p>
          </div>
        </div>
      </button>
      <button
        className={`my-1 w-full rounded-md text-[${font}] bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div>
            <div className={`flex justify-start items-center mt-1 gap-3`}>
              <div className="flex gap-1">
                <EthLogo className={`w-6`} />
                <EthLogo className={`w-6`} />
              </div>
              <p className={`text-lg rounded-sm`}>FLOKI / WETH</p>
            </div>
            <p className="text-sm  mt-1">
              Liquidity: <span className="font-bold">(105.47 B / 1.4 K)</span>
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">$ 4.75M</p>
            <p className="text-sm">Next in 263 years</p>
          </div>
        </div>
      </button>
      <button
        className={`my-1 w-full rounded-md text-[${font}] bg-[${button}] hover:bg-[${hover}] hover:text-[${fontHolder}] p-3`}
      >
        <div className={`flex justify-between items-center`}>
          <div>
            <div className={`flex justify-start items-center mt-1 gap-3`}>
              <div className="flex gap-1">
                <EthLogo className={`w-6`} />
                <EthLogo className={`w-6`} />
              </div>
              <p className={`text-lg rounded-sm`}>FLOKI / WETH</p>
            </div>
            <p className="text-sm  mt-1">
              Liquidity: <span className="font-bold">(105.47 B / 1.4 K)</span>
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">$ 4.75M</p>
            <p className="text-sm">Next in 263 years</p>
          </div>
        </div>
      </button>
      <hr className={`my-3 border-[${border}]`}></hr>
      <div className="mx-auto flex items-center gap-8">
        <div className="flex mx-auto items-center">
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

export default Profileliquidity;
