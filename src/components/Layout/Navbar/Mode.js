import React from "react";
import Brightness from "../../Logos/Brightness";
import Menu from "./Menu";

function Mode() {
  return (
    <div style={{ position: "relative" }}>
      <button className="mode">
        <Brightness />
      </button>
      <Menu />
    </div>
  );
}

export default Mode;
