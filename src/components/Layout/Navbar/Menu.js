import React from "react";
import DimLogo from "../../Logos/DimLogo";
import DarkLogo from "../../Logos/DarkLogo";
import LightLogo from "../../Logos/LightLogo";

const Menu = () => {
  const classNames = {
    menuBox: {
      position: "absolute",
      color: ""
    },
    rows: {
      display: "flex",
      alignItems: "center"
    },
  };

  return (
    <div style={classNames.menuBox}>
      <div style={classNames.rows}>
        <LightLogo
          width={20}
          height={20}
          twidth={0}
          theight={20}
          color="#000"
          scale={0.01}
        />
        Light
      </div>
      <div style={classNames.rows}>
        <DimLogo
          width={20}
          height={20}
          twidth={0}
          theight={20}
          color="#000"
          scale={0.01}
        />
        Dim
      </div>
      <div style={classNames.rows}>
        <DarkLogo
          width={20}
          height={20}
          twidth={9}
          theight={20}
          color="#000"
          scale={0.025}
        />
        Dark
      </div>
    </div>
  );
};

export default Menu;
