import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EthLogo } from "../../assets/Icons";
import LockedPanel from "./LockedPanel";
import { ethers, BigNumber } from "ethers";
import { toast } from "react-toastify";
import { LockerABI, PairABI, TokenABI } from "../../assets/ABIs";
import Loading from "../Layout/Loading";

const LOCKER_ADDRESS = "0xfc2a975b8576d8bd57dbc3d55c10795de9944a82";

function EditLock() {
  const { font, fontHolder, backgroundHolder, mainBg, hover } = useSelector(
    (state) => state.theme
  );
  const { wallet_address } = useSelector((state) => state.web3);

  const [panelStatus, setPanelStatus] = useState(false);
  const [lpToken, setLPToken] = useState([]);

  //SECTION - get token address
  useEffect(() => {
    async function getLockedLPTokenList() {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);

        const LockInstance = new ethers.Contract(
          LOCKER_ADDRESS,
          LockerABI,
          provider
        );
        const lockedLPTokenNumber = await LockInstance.getUserNumLockedTokens(
          wallet_address
        );

        const indexes = BigNumber.from(lockedLPTokenNumber).toNumber();
        const lockedLPTokens = new Array();
        for (let i = 0; i < indexes; i++) {
          const address = await LockInstance.getUserLockedTokenAtIndex(
            wallet_address,
            i
          );
          const LPTokenInstance = new ethers.Contract(
            address,
            PairABI,
            provider
          );
          const token0Address = await LPTokenInstance.token0();
          const token1Address = await LPTokenInstance.token1();

          const token0Instance = new ethers.Contract(
            token0Address,
            TokenABI,
            provider
          );
          const token0 = await token0Instance.symbol();

          const token1Instance = new ethers.Contract(
            token0Address,
            TokenABI,
            provider
          );
          const token1 = await token1Instance.symbol();
          lockedLPTokens.push({ address, token0, token1 });
        }
        setLPToken(lockedLPTokens);
      } else {
        toast.warn("Metamask is not detected!");
      }
    }
    getLockedLPTokenList();
    return () => {};
  }, []);

  //!SECTION

  return !panelStatus ? (
    <div className="p-4">
      <p
        className={`text-sm font-medium text-[${font}] dark:text-[${fontHolder}]`}
      >
        Edit / Withdraw
      </p>
      <p className={` mt-5 text-[${font}] text-medium`}>
        Enter the Lookymoon V2 – Goerli pair address youd like to access
      </p>
      <div className="mb-6">
        <input
          type="text"
          id="default-input"
          placeholder="Lookymoon V2 – Goerli pair address…"
          className={` my-4 bg-[${mainBg}]  text-[${fontHolder}] text-sm rounded-lg  block w-full p-2.5 bg-[${backgroundHolder}]`}
        />
        <label className="block mb-2 text-sm text-gray-900 dark:text-white">
          e.g. 0xc70556952asdfasd2sfsdf5sdf5sdfsdfsd4fsd6fsdfsd
        </label>
      </div>
      {lpToken.length != 0 ? (
        lpToken.map((item, index) => {
          return (
            <button
              className={` mb-6 w-full justify-between text-[${fontHolder}] text-lg bg-[${backgroundHolder}] hover:bg-[${hover}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center `}
              type="button"
              key={index}
              onClick={() => {
                setPanelStatus(true);
              }}
            >
              <div className={`text-lg flex gap-2 items-center text-[${font}]`}>
                <EthLogo className={`w-9 h-9`} />
                {`${item.token0} / ${item.token1}`}
              </div>
              <p>
                {item.address.slice(0, 5) +
                  "..." +
                  item.address.slice(
                    item.address.length - 4,
                    item.address.length
                  )}
              </p>
            </button>
          );
        })
      ) : (
        <Loading
          className="slideUpEnter"
          style={{ minHeight: "100px" }}
          text={`Searching`}
        />
      )}
    </div>
  ) : (
    <LockedPanel />
  );
}

export default EditLock;
