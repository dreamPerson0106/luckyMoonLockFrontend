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

function Navbar() {
  const { font, background, border } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.ethereum) {
      dispatch(changeChain(window.ethereum.chainId));
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
