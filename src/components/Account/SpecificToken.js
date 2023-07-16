import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Chart } from "primereact/chart";
import Connect from "../Layout/Navbar/Connect";
// import "chart.js/auto";

function SpecificToken() {
  const {
    font,
    fontHolder,
    border,
    background,
    hover,
    button,
    buttonHolder,
    backgroundHolder,
  } = useSelector((state) => state.theme);

  const [chartData] = useState({
    labels: ["Presale", "Liquidity", "Fees", "Locked", "Burnt", "Unlocked"],
    datasets: [
      {
        data: [40, 80, 10, 5, 100, 115],
        backgroundColor: [
          "#D762EA",
          "#627EEA",
          "#F3BA2F",
          "#1ECD84",
          "#FC5252",
          "#8C8C8C",
        ],
        hoverBackgroundColor: [
          "#D762EA",
          "#627EEA",
          "#F3BA2F",
          "#1ECD84",
          "#FC5252",
          "#8C8C8C",
        ],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <div>
      <div
        className={`bg-[${background}] py-3 text-center w-full rounded-t-lg  border-[${border}] border-[1px]`}
        style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
      >
        <span className={`text-lg text-[yellow]`}>Starts in hours</span>, Thu 13
        Jul 12:30, 22790 blocks
      </div>
      <div
        className={`my-2 pt-8 pb-4 grid grid-cols-4 gap-10 px-28 items-center bg-[${background}] rounded-b-lg  border-[${border}] border-[1px]`}
        style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
      >
        <div className={`flex gap-10 col-span-3 items-center`}>
          <span className="text-9xl">🤔</span>
          <div className="">
            <p className="text-3xl">TUSDT</p>
            <p className={`text-[${fontHolder}]`}>Socials</p>
            <p className={`text-[${fontHolder}]`}>Status</p>
            <p className={`text-[${fontHolder}]`}>Softcap</p>
            <p className={`text-[${fontHolder}]`}>Badges</p>
          </div>
        </div>
        <div className="text-end items-center mr-16">
          <p>Awaiting Start</p>
          <p>100 BNB</p>
        </div>
        <div
          className={`col-span-2 bg-[${backgroundHolder}] py-2 text-center rounded-full`}
        >
          0 / 400 BNB
        </div>
        <div
          className={`bg-[${backgroundHolder}] py-2 text-center rounded-full`}
        >
          0 / 0 reserved
        </div>
        <div
          className={`bg-[${backgroundHolder}] py-2 text-center rounded-full`}
        >
          0 / 200 whitelist
        </div>
      </div>
      <div
        className={`my-6 pt-8 pb-6 px-12 bg-[${background}] max-w-[80%] mx-auto rounded-lg  border-[${border}] border-[1px]`}
        style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
      >
        <p className={`text-[#ffd147] text-2xl`}>Safety Alert</p>
        <p className={`text-[${fontHolder}] my-5`}>
          This is a decentralised and open presale platform. Similar to Uniswap
          anyone can create and name a presale freely including fake versions of
          existing tokens. It is also possible for developers of a token to mint
          near infinite tokens and dump them on locked liquidity. Please do your
          own research before using this platform.
        </p>
        <div className="flex justify-between items-center">
          <Link to="#">Terms And Conditions</Link>
          <div className="gap-10 inline-flex items-center">
            <Link to="#" className="">
              More Info
            </Link>
            <button
              type="dismiss"
              className={`text-[white] bg-[#cfa938] px-10 h-10 rounded-full`}
            >
              I understand
            </button>
          </div>
        </div>
      </div>
      <div
        className={`my-6 pt-4 pb-3 px-12 max-w-[80%] mx-auto rounded-lg grid grid-cols-9 gap-10 grid-rows-1 `}
      >
        <div
          className={`px-5 py-8 card bg-[${background}] rounded-lg col-span-5 row-span-3  border-[${border}] border-[1px]`}
          style={{ boxShadow: "0 5px 10px rgba(151, 164, 175, 0.05)" }}
        >
          <div className="w-full mb-8">
            <Chart
              type="doughnut"
              data={chartData}
              options={lightOptions}
              className="relative w-52 mx-auto"
            />
          </div>
          <Link to={"#"} className="text-[#ffd147] hover:text-[#cfa938]">
            Lock Team Tokens
          </Link>
          <p className={`text-[${font}] mt-4`}>
            Locked: refers to token locks with maturity at least 7 days after
            the presale begins.
          </p>
          <p className={`text-[#ffd147] my-4`}>-100% price impact</p>
          <p className={`text-[${font}]`}>
            if unlocked tokens are dumped on the pool.
            <br />
            Decrease risk in this presale by asking the devs to lock team
            tokens.
          </p>
        </div>
        <div className={`grid rounded-lg col-span-4 gap-10`}>
          <div className={`px-5 py-3 rounded-lg bg-[#ADFEDC] h-36 text-center`}>
            <p className={`text-lg text-[#017B48]`}>
              This ENMT token was generated by the LuckyMoon Token Factory. No
              mint function, and no admin functions exist on this token.
            </p>
          </div>
          <div className={` bg-[${background}]`}>
            <div
              className={`bg-[${button}] rounded-t-[30px]  border-[${border}] border-[1px]`}
              style={{ boxShadow: "1px 2px 6px rgba(151, 164, 175, 0.05)" }}
            >
              <ul
                className={`flex justify-around flex-wrap -mb-px text-lg font-medium text-center`}
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li className="mr-2" role="presentation">
                  <Link
                    className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[${font}] hover:text-[${fontHolder}]`}
                    to="/sushi-v1/ex-token"
                    onClick={() => {}}
                  >
                    Presale
                  </Link>
                </li>
                <li className="mr-2" role="presentation">
                  <Link
                    className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg  text-[${font}] hover:text-[${fontHolder}]`}
                    to="/sushi-v1/ex-lockliquidity"
                    onClick={() => {}}
                  >
                    Info
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`bg-[${background} items-center flex px-5 py-8 h-full col-span-4 row-span-2  border-[${border}] border-[1px]`}
              style={{ boxShadow: "0 6px 9px rgba(151, 164, 175, 0.05)" }}
            >
              <button
                className={`rounded-full bg-[${button}] w-full py-3 my-auto`}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificToken;
