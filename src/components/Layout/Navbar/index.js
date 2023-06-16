import React from "react";
import { Logo } from "../../../assets/Icons";
import Connect from "./Connect.js";
import Mode from "./Mode.js";
import "./navbar.css";
import { useSelector } from "react-redux";
import BrowserMenu from "./BrowserMenu.js";
import { Link } from "react-router-dom";

function Navbar() {
  const { font, background, backgroundHolder, border } = useSelector(
    (state) => state
  );

  return (
    <nav className={`border-[${border}] bg-[${background}] navbar `}>
      <div className={`text-[${font}] inline-flex items-center gap-9`}>
        <Link to="/">
          <Logo width={"301"} height={"55"} />
        </Link>
        <Link to={"services"}>SERVICES</Link> <BrowserMenu>BROWSER</BrowserMenu>{" "}
        <Link to={"#"}>Doc</Link>
      </div>
      <div style={{ display: "inline-flex", gap: 30, alignItems: "center" }}>
        <Connect />
        <Mode />
      </div>
    </nav>
  );
}

export default Navbar;
