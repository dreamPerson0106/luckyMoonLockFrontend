import React from "react";
import { Logo } from "../../../assets/Icons";
import Connect from "./Connect.js";
import Mode from "./Mode.js";
import "./navbar.css";
import { useSelector } from "react-redux";
import BrowserMenu from "./BrowserMenu.js";

function Navbar() {
  const { font, background, backgroundHolder, theme } = useSelector(
    (state) => state
  );

  return (
    <nav className={`border-[${backgroundHolder}] bg-[${background}] navbar `}>
      <div className={`text-[${font}] inline-flex items-center gap-9`}>
        <Logo width={"301"} height={"55"} />
        <p>SERVICES</p> <BrowserMenu>BROWSER</BrowserMenu> <p>Doc</p>
      </div>
      <div style={{ display: "inline-flex", gap: 30, alignItems: "center" }}>
        <Connect />
        <Mode />
      </div>
    </nav>
  );
}

export default Navbar;
