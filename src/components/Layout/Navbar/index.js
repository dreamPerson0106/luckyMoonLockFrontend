import React, { useEffect } from "react";
import { Logo } from "../../../assets/Icons";
import Connect from "./Connect.js";
import Mode from "./Mode.js";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import BrowserMenu from "./BrowserMenu.js";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { changeChain, changeTheme } from "../../../actions";
import themes from "../../../assets/theme.json";
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
        dispatch(changeChain("0x" + chainId.toString(16)));
      }
    }
    fetchData();
    let bright_mode = localStorage.getItem("BRIGHT_MODE");
    console.log(bright_mode);
    switch (bright_mode) {
      case "light":
        dispatch(changeTheme(themes.light));
        break;
      case "dark":
        dispatch(changeTheme(themes.dark));
        break;
      case "dim":
        dispatch(changeTheme(themes.dark));
        break;

      default:
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: light)").matches
        ) {
          console.log("lighttttttttttt");
          localStorage.setItem("BRIGHT_MODE", "light");
          dispatch(changeTheme("light"));
        } else {
          // Windows is in dark mode
          console.log("darkkkkkkkkkk");
          localStorage.setItem("BRIGHT_MODE", "dark");
          dispatch(changeTheme("dark"));
        }
        break;
    }
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
