import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import { LightLogo, DarkLogo, DimLogo } from "../../../assets/Icons";

function Mode() {
  const { button, hover, backgroundHolder, theme } = useSelector(
    (state) => state
  );
  const menu_bar = useRef(null);
  const mode_button = useRef(null);
  const [menu_status, setMenuStatus] = useState(false);

  const themeModeIcon = () => {
    switch (theme) {
      case "light":
        return (
          <LightLogo
            width={22}
            height={22}
            twidth={0}
            theight={13}
            color="#0784c3"
            scale={0.01}
          />
        );
      case "dim":
        return (
          <DimLogo
            width={22}
            height={22}
            twidth={0}
            theight={13}
            color="#0784c3"
            scale={0.01}
          />
        );
      case "dark":
        return (
          <DarkLogo
            width={22}
            height={22}
            twidth={0}
            theight={13}
            color="#0784c3"
            scale={0.01}
          />
        );

      default:
        return (
          <LightLogo
            width={22}
            height={22}
            twidth={0}
            theight={13}
            color="#0784c3"
            scale={0.01}
          />
        );
    }
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        menu_bar.current &&
        !menu_bar.current.contains(event.target) &&
        mode_button.current &&
        !mode_button.current.contains(event.target)
      ) {
        // Clicked outside the div
        setMenuStatus(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menu_bar]);

  return (
    <div style={{ position: "relative" }}>
      <button
        className={`mode bg-[${button}] border-[${backgroundHolder}] hover:bg-[${hover}] ${
          menu_status ? `bg-[${hover}]` : ""
        }`}
        onClick={() => {
          setMenuStatus(!menu_status);
        }}
        ref={mode_button}
      >
        {themeModeIcon()}
      </button>
      <Menu
        menu_status={menu_status}
        onBlur={() => {
          setMenuStatus(false);
        }}
        refs={menu_bar}
      />
    </div>
  );
}

export default Mode;
