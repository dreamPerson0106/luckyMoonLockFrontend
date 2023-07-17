import { ethers } from "ethers";
import { toast } from "react-toastify";

export const connectMetamask = async () => {
  const ethereum = window;
  if (ethereum) {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(ethereum);

      const signer = provider.getSigner();
      return signer;
    } catch (error) {
      toast.error(error);
    }
  } else {
    toast.error("Metamask not detected");
  }
};
