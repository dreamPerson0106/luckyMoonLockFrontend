import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { BinanceIcon, EthLogo } from "../../assets/Icons";
import ScrollContainer from "react-indiana-drag-scroll";
import { useDraggable } from "react-use-draggable-scroll";

import { Link } from "react-router-dom";

const TokenList = () => {
  const { border, font, background } = useSelector((state) => state);

  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:

  const token_list = [
    {
      title: "NEOPUNK",
      chain: "ETH",
      price: 200,
      period: 2,
    },
    {
      title: "CCT",
      chain: "BNB",
      price: 8,
      period: 2,
    },
    {
      title: "SMUDGE",
      chain: "BNB",
      price: 800,
      period: 5,
    },
    {
      title: "PPM",
      chain: "BNB",
      price: 8,
      period: 16,
    },
    {
      title: "APLS",
      chain: "BNB",
      price: "1,000",
      period: 19,
    },
    {
      title: "NEOPUNK",
      chain: "ETH",
      price: 200,
      period: 2,
    },
    {
      title: "CCT",
      chain: "BNB",
      price: 8,
      period: 2,
    },
    {
      title: "SMUDGE",
      chain: "BNB",
      price: 800,
      period: 5,
    },
    {
      title: "PPM",
      chain: "BNB",
      price: 8,
      period: 16,
    },
    {
      title: "APLS",
      chain: "BNB",
      price: "1,000",
      period: 19,
    },
  ];

  const drag_token = useRef(null);

  return (
    // <div className="w-full overflow-x-scroll flex gap-5 pb-4" ref={drag_token}>

    <div
      className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      {token_list.map((item, index) => {
        return (
          // <Link to={`/tokens`} key={index}>
          <div
            className={`grid grid-cols-2 gap-7 border-[${border}] bg-[${background}] text-[${font}] px-4 py-2 rounded-lg border-2 items-center w-80`}
            style={{ gridTemplateColumns: "86px 150px" }}
            key={index}
          >
            <div
              className={`relative border-2 border-[${border}] w-[86px] h-[86px] rounded-full flex justify-center items-center col-span-1`}
            >
              <img
                src={`/img/${item.title.toLowerCase()}.svg`}
                className="w-[75px] h-w-[75px]"
                alt={item.title}
              />
              {item.chain === "ETH" ? (
                <EthLogo className={`w-6 h-6 bottom-0 right-0 absolute`} />
              ) : (
                <BinanceIcon className={`w-6 h-6 bottom-0 right-0 absolute`} />
              )}
            </div>
            <div className="w-50 col-span-1">
              <h5>{item.title}</h5>
              <p>
                {item.price} {item.chain}
              </p>
              <p>in {item.period} days</p>
            </div>
          </div>
          // </Link>
        );
      })}
    </div>
  );
};

export default TokenList;
