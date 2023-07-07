import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { PairABI, TokenABI } from "../../assets/ABIs";
import Loading from "../Layout/Loading";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { EthLogo } from "../../assets/Icons";
import { changePairContract } from "../../actions";

const SearchResult = ({ pairAddress, temp }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [pairInfo, setPairInfo] = useState({
    balanceOf: "0",
    token0: "",
    token1: "",
    error: false,
  });
  const { font, fontHolder, hover, button } = useSelector(
    (state) => state.theme
  );
  const { wallet_address } = useSelector((state) => state.web3);

  //SECTION - create web3 instance and save pair info
  const web3Instance = async (pair_address) => {
    const { ethereum } = window;
    if (ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        // Load the contract
        const pairContract = new ethers.Contract(pair_address, PairABI, signer);
        let balanceOf = await pairContract.balanceOf(wallet_address);
        balanceOf = ethers.utils.formatEther(balanceOf);
        let token0 = await pairContract.token0();
        let token1 = await pairContract.token1();
        const token0Contract = new ethers.Contract(token0, TokenABI, provider);
        const token1Contract = new ethers.Contract(token1, TokenABI, provider);
        const token0Symbol = await token0Contract.symbol();
        const token1Symbol = await token1Contract.symbol();
        setPairInfo({
          balanceOf,
          token0: token0Symbol,
          token1: token1Symbol,
          error: false,
        });
        dispatch(changePairContract(pairContract));
        setLoading(true);
      } catch (err) {
        setPairInfo({
          ...pairInfo,
          error: true,
        });
        setLoading(true);
        toast.error("Error to find pair! \n Write correct pair address. ");
      }
    }
  };

  useEffect(() => {
    //NOTE - USDC/WETH pool 0x647595535c370F6092C6daE9D05a7Ce9A8819F37
    //NOTE - WETH/USDC pool 0x513Dc22a3d82e6f15F86e8DbD7B8581c64D02f97
    setLoading(false);
    // web3Instance(pairAddress);
    //FIXME - change lptoken contract address
    web3Instance(pairAddress);
    return () => {};
  }, [pairAddress]);
  //!SECTION

  return !loading ? (
    <Loading className="slideUpEnter" style={{ minHeight: "100px" }} />
  ) : pairInfo.error ? (
    <p className="my-2 text-center text-lg">Pair address does not exist.</p>
  ) : (
    <button
      className={`slideUpEnter my-6 w-full justify-between text-[${fontHolder}] text-lg bg-[${button}] hover:bg-[${hover}] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center `}
      type="button"
      onClick={
        Number(pairInfo.balanceOf) === 0
          ? () => {
              toast.warn("Charge LP token!");
            }
          : temp
      }
    >
      <div className={`text-lg flex gap-2 items-center text-[${font}]`}>
        <EthLogo className={`w-9 h-9`} />
        {pairInfo.token0 + ` / ` + pairInfo.token1}
      </div>
      <p>{pairInfo.balanceOf}</p>
    </button>
  );
};

export default SearchResult;
