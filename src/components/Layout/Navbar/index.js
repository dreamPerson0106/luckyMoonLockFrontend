import React from "react";
import Logo from "../../Logos/Logo.js";
import Connect from "./Connect.js";
import Mode from "./Mode.js";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Logo width={"301"} height={"55"} />
      <div style={{ display: "inline-flex", gap: 30, alignItems: "center" }}>
        <Connect />
        <Mode />
      </div>
    </nav>
  );
}

export default Navbar;
