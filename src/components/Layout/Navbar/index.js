import React from "react";
import { Logo } from "../../../assets/Icons";
import Connect from "./Connect.js";
import Mode from "./Mode.js";
import "./navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const { background, backgroundHolder, theme } = useSelector((state) => state);

  return (
    <nav
      className={`border-[${backgroundHolder}] bg-[${background}] navbar z-50`}
    >
      <Logo width={"301"} height={"55"} />
      <div style={{ display: "inline-flex", gap: 30, alignItems: "center" }}>
        <Connect />
        <Mode />
      </div>
    </nav>
  );
}

export default Navbar;
