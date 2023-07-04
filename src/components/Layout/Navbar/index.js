import React, { useEffect } from "react";
import { Logo } from "../../../assets/Icons";
import Connect from "./Connect.js";
import Mode from "./Mode.js";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import BrowserMenu from "./BrowserMenu.js";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { changeChain } from "../../../actions";
import { ethers } from "ethers";

function Navbar() {
  const { font, background, border } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const chainId = await provider
          .getNetwork()
          .then((network) => network.chainId);
        console.log("chainID", "0x" + chainId.toString(16));
        dispatch(changeChain("0x" + chainId.toString(16)));
      }
    }
    fetchData();
  }, []);

  return (
    <nav className={`border-[${border}] bg-[${background}] navbar`}>
      <div className={`text-[${font}] inline-flex items-center gap-9`}>
        <Link to="/">
          <Logo width={"301"} height={"55"} />
        </Link>
        <Link to={"services"}>SERVICES</Link> <BrowserMenu>BROWSER</BrowserMenu>{" "}
        <Link to={"#"}>Doc</Link>
      </div>
      <div style={{ display: "inline-flex", gap: 30, alignItems: "center" }}>
        <Connect />
        <Profile />
        <Mode />
      </div>
    </nav>
  );
}

export default Navbar;
