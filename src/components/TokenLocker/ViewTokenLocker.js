import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TokenABI, TokenLockerABI } from "../../assets/ABIs";

const TOKEN_ADDRESS = "0xe02c1e6eba5e2f189020968f550ed3fb1a6fe7a8";

const ViewTokenLocker = ({ token_address }) => {
  const { border, background } = useSelector((state) => state.theme);
  const { wallet_address } = useSelector((state) => state.web3);
  const [lockedToken, setLockedToken] = useState(null);

  useEffect(() => {
    async function getLockedToken() {
      const { ethereum } = window;
      if (ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const tokenLockerInstance = new ethers.Contract(
            TOKEN_ADDRESS,
            TokenLockerABI,
            provider
          );
          let userLockTokenLength =
            await tokenLockerInstance.getUserLocksForTokenLength(
              wallet_address,
              token_address
            );
          userLockTokenLength = BigNumber.from(userLockTokenLength).toNumber();
          let array = [];
          for (let i = 0; i < userLockTokenLength; i++) {
            let tokenLockID = await tokenLockerInstance.getTokenLockIDAtIndex(
              token_address,
              i
            );
            const lock = await tokenLockerInstance.getLock(
              BigNumber.from(tokenLockID).toNumber()
            );
            console.log(
              BigNumber.from(lock[0]).toNumber(),
              BigNumber.from(lock[2]).toNumber(),
              BigNumber.from(lock[3]).toNumber(),
              BigNumber.from(lock[4]).toNumber(),
              BigNumber.from(lock[5]).toNumber(),
              BigNumber.from(lock[6]).toNumber(),
              new Date(new Date() + BigNumber.from(lock[7]).toNumber())
            );
            const tokenInstance = new ethers.Contract(
              lock[1],
              TokenABI,
              provider
            );
            const decimals = await tokenInstance.decimals();

            console.log(lock[1], lock[8], lock[9]);
            array.push({
              date: new Date(BigNumber.from(lock[7]).toNumber() * 1000),
              Withdrawal: ethers.utils.formatUnits(lock[4], decimals),
              locked: ethers.utils.formatUnits(lock[2], decimals),
            });
          }
          console.log(array);
          setLockedToken(array);
        } catch (err) {
          console.log(err);
          toast.error(err.message.split("(")[0].split("[")[0]);
        }
      } else {
        toast.warn("Metamask is not detected!");
      }
    }
    getLockedToken();
    return () => {};
  }, []);

  const handleWithdraw = () => {};

  return (
    <div className={`box_1 bg-[${background}] border-[${border}] p-5`}>
      {lockedToken &&
        lockedToken.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.Withdrawal} locked</p>
              <p>until {item.date.toString()}</p>
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
              >
                withdraw
              </button>
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
              >
                setting
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ViewTokenLocker;
