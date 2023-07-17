import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { BinanceIcon, EthLogo } from "../../assets/Icons";
import { useDraggable } from "react-use-draggable-scroll";

import { Link } from "react-router-dom";

const TokenList = () => {
  const { border, font, background } = useSelector((state) => state.theme);

  const drag_token = useRef(null);
  const { events } = useDraggable(drag_token); // Now we pass the reference to the useDraggable hook:

  const token_list = [
    {
      title: "NEOPUNK",
      chain: "ETH",
      link: "specific",
      price: 200,
      period: 2,
    },
    {
      title: "CCT",
      link: "specific",
      chain: "BNB",
      price: 8,
      period: 2,
    },
    {
      title: "SMUDGE",
      link: "specific",
      chain: "BNB",
      price: 800,
      period: 5,
    },
    {
      title: "PPM",
      link: "specific",
      chain: "BNB",
      price: 8,
      period: 16,
    },
    {
      title: "APLS",
      link: "specific",
      chain: "BNB",
      price: "1,000",
      period: 19,
    },
    {
      title: "NEOPUNK",
      link: "specific",
      chain: "ETH",
      price: 200,
      period: 2,
    },
    {
      title: "CCT",
      link: "specific",
      chain: "BNB",
      price: 8,
      period: 2,
    },
    {
      title: "SMUDGE",
      link: "specific",
      chain: "BNB",
      price: 800,
      period: 5,
    },
    {
      title: "PPM",
      link: "specific",
      chain: "BNB",
      price: 8,
      period: 16,
    },
    {
      title: "APLS",
      link: "specific",
      chain: "BNB",
      price: "1,000",
      period: 19,
    },
  ];

  return (
    <div
      className="flex max-w-full space-x-3 overflow-x-hidden scrollbar-hide"
      {...events}
      ref={drag_token} // add reference and events to the wrapping div
    >
      {token_list.map((item, index) => {
        return (
          <Link to={`/latest_locked_tokens/${item.link}`} key={index}>
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
                  <BinanceIcon
                    className={`w-6 h-6 bottom-0 right-0 absolute`}
                  />
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
          </Link>
        );
      })}
    </div>
  );
};

export default TokenList;
