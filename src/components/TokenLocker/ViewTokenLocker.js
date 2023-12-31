import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TokenABI, TokenLockerABI } from "../../assets/ABIs";
import Loading from "../Layout/Loading";
import TimePicker from "./TimePicker";

const TOKEN_ADDRESS = "0xe02c1e6eba5e2f189020968f550ed3fb1a6fe7a8";

const ViewTokenLocker = ({ token_address }) => {
  const { border, background } = useSelector((state) => state.theme);
  const { wallet_address, contract } = useSelector((state) => state.web3);
  const [lockedToken, setLockedToken] = useState(null);
  const [relockDate, setRelockDate] = useState("");
  const [splitValue, setSplitValue] = useState("");
  const [incrementValue, setIncrementValue] = useState("");
  const [tokenInfo, setTokenInfo] = useState(null);
  const [withdrawValue, setWithdrawValue] = useState(0);
  const [ownership, setOwnership] = useState("");

  useEffect(() => {
    async function getLockedToken() {
      const { ethereum } = window;
      if (ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(ethereum);

          let balanceOf = await contract.balanceOf(wallet_address);
          let allowance = await contract.allowance(
            wallet_address,
            TOKEN_ADDRESS
          );
          const decimals = await contract.decimals();
          balanceOf = ethers.utils.formatUnits(balanceOf, decimals);
          allowance = ethers.utils.formatUnits(allowance, decimals);

          setTokenInfo({ balanceOf, allowance, decimals });

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
            let tokenLockID =
              await tokenLockerInstance.getUserLockIDForTokenAtIndex(
                wallet_address,
                token_address,
                i
              );
            const lock = await tokenLockerInstance.getLock(
              BigNumber.from(tokenLockID).toNumber()
            );

            const tokenInstance = new ethers.Contract(
              lock[1],
              TokenABI,
              provider
            );
            const decimals = await tokenInstance.decimals();
            array.push({
              lockID: BigNumber.from(lock[0]).toNumber(),
              tokenAddress: lock[1],
              locked: ethers.utils.formatUnits(lock[2], decimals),
              shareDeposited: ethers.utils.formatUnits(lock[4], decimals),
              withdrawn: ethers.utils.formatUnits(lock[3], decimals),
              sharewithdrawn: ethers.utils.formatUnits(lock[5], decimals),
              startDate: new Date(BigNumber.from(lock[6]).toNumber() * 1000),
              endDate: new Date(BigNumber.from(lock[7]).toNumber() * 1000),
              owner: lock[8],
              condition: lock[9],
              decimals: decimals,
            });
          }
          setLockedToken(array);
        } catch (err) {
          toast.error(err.message.split("(")[0].split("[")[0]);
        }
      } else {
        toast.warn("Metamask is not detected!");
      }
    }
    getLockedToken();
    return () => {};
  }, []);

  const handleWithdraw = (lockID, decimals) => async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const tokenLockerInstance = new ethers.Contract(
          TOKEN_ADDRESS,
          TokenLockerABI,
          signer
        );
        let withdraw = await tokenLockerInstance.withdraw(
          lockID,
          parseInt(withdrawValue * 10 ** decimals)
        );
        withdraw = await withdraw.wait(1);
        if (withdraw.status === 1) {
          toast.success("Withdraw Success!");
        } else {
          toast.error("Withdraw Failed!");
        }
      } catch (err) {
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    } else {
      toast.warn("Metamask is not detected!");
    }
  };

  //SECTION - handle Split token

  const handleSplit = (lockID, decimals) => async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const tokenLockerInstance = new ethers.Contract(
          TOKEN_ADDRESS,
          TokenLockerABI,
          signer
        );

        let splitToken = await tokenLockerInstance.splitLock(
          lockID,
          parseInt(splitValue * 10 ** decimals)
        );
        splitToken = await splitToken.wait(1);
        if (splitToken.status === 1) {
          toast.success("Split Token Success!");
        } else {
          toast.error("Split Token Failed!");
        }
      } catch (err) {
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    } else {
      toast.warn("Metamask is not detected!");
    }
  };

  //!SECTION

  //SECTION - Handle Relock

  const handleRelock = (lockID) => async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const tokenLockerInstance = new ethers.Contract(
          TOKEN_ADDRESS,
          TokenLockerABI,
          signer
        );
        const relock_date = parseInt(relockDate.getTime() / 1000);
        let relock = await tokenLockerInstance.relock(lockID, relock_date);
        const txStatus = await relock.wait(1);
        if (txStatus.status === 1) {
          toast.success("Relock is successed!");
        } else {
          toast.error("Relock is faield!");
        }
      } catch (err) {
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    } else {
      toast.warn("Metamask is not detected!");
    }
  };

  //!SECTION - Handle Relock

  //SECTION -- HANDLE TRANSFER OWNERSHIP

  const handleTransferOnwership = (lockID) => async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const tokenLockerInstance = new ethers.Contract(
          TOKEN_ADDRESS,
          TokenLockerABI,
          signer
        );

        let transferLockOwnership =
          await tokenLockerInstance.transferLockOwnership(lockID, ownership);
        transferLockOwnership = await transferLockOwnership.wait(1);
        if (transferLockOwnership.status === 1) {
          toast.success("Transfer Onwership Success!");
        } else {
          toast.error("Transfer Ownership Failed!");
        }
      } catch (err) {
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    } else {
      toast.warn("Metamask is not detected!");
    }
  };

  //!SECTION

  //SECTION - HANDLE APPROVE FOR INCREMENT LOCK
  const handleIncrementApprove = async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const decimals = await contract.decimals();
        let approve = await contract.approve(
          TOKEN_ADDRESS,
          parseInt(incrementValue * 10 ** decimals)
        );
        approve = await approve.wait(1);
        if (approve.status === 1) {
          toast.success("Token Approve Success!");
        } else {
          toast.error("Token Approve Failed!");
        }
      } catch (err) {
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    } else {
      toast.warn("Metamask is not detected!");
    }
  };
  //!SECTION

  //SECTION - HANDLE INCREMENT LOCK

  const handleIncrementLock = (lockID, decimals) => async () => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const tokenLockerInstance = new ethers.Contract(
          TOKEN_ADDRESS,
          TokenLockerABI,
          signer
        );
        let incrementLock = await tokenLockerInstance.incrementLock(
          lockID,
          parseInt(incrementValue * 10 ** decimals)
        );
        incrementLock = await incrementLock.wait(1);
        if (incrementLock.status === 1) {
          toast.success("Increment Lock Success!");
        } else {
          toast.error("Increment Lock Failed!");
        }
      } catch (err) {
        toast.error(err.message.split("(")[0].split("[")[0]);
      }
    } else {
      toast.warn("Metamask is not detected!");
    }
  };
  //!SECTION

  return (
    <div className={`box_1 bg-[${background}] border-[${border}] p-5`}>
      {tokenInfo && JSON.stringify(tokenInfo)}
      {lockedToken ? (
        lockedToken.map((item, index) => {
          return (
            <div key={index}>
              {JSON.stringify(item)
                .split(",")
                .map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              <input
                type="text"
                placeholder="withdraw"
                value={withdrawValue}
                onChange={(e) => setWithdrawValue(e.target.value)}
              ></input>
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
                onClick={handleWithdraw(item.lockID, item.decimals)}
              >
                withdraw
              </button>
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
              >
                setting
              </button>
              <input
                type="text"
                value={splitValue}
                onChange={(e) => {
                  setSplitValue(e.target.value);
                }}
                placeholder="splitLock"
              />
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
                onClick={handleSplit(item.lockID, item.decimals)}
              >
                split
              </button>
              <input
                type="text"
                value={relockDate}
                onChange={(e) => setRelockDate(e.target.value)}
              />
              <TimePicker
                dateMoment={relockDate}
                setDateMoment={(moment) => setRelockDate(new Date(moment))}
              />
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
                onClick={handleRelock(item.lockID)}
              >
                relock
              </button>
              <input
                type="text"
                placeholder="Transfer Ownership"
                value={ownership}
                onChange={(e) => setOwnership(e.target.value)}
              />
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
                onClick={handleTransferOnwership(item.lockID)}
              >
                Transfer Ownership
              </button>
              <input
                type="text"
                value={incrementValue}
                onChange={(e) => setIncrementValue(e.target.value)}
                placeholder="Increment Value"
              />
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
                onClick={handleIncrementApprove}
              >
                Increment Approve
              </button>
              <button
                className={`border-[1px] border-[${border}] px-3 py-1 rounded-lg`}
                onClick={handleIncrementLock(item.lockID, item.decimals)}
              >
                Increment Lock
              </button>
            </div>
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
  );
};

export default ViewTokenLocker;
