import React from "react";
import { useDispatch, useSelector } from "react-redux";
import themes from "../../../assets/theme.json";
import { changeTheme } from "../../../actions/index";
import { LightLogo, DimLogo, DarkLogo, Setting } from "../../../assets/Icons";

const Menu = ({ menu_status, refs }) => {
  const dispatch = useDispatch();
  const { font, hover, background, backgroundHolder, fontHolder, theme } =
    useSelector((state) => state);

  const clickChangeTheme = (state) => () => {
    switch (state) {
      case "light":
        return dispatch(changeTheme(themes.light));
      case "dim":
        return dispatch(changeTheme(themes.dim));
      case "dark":
        return dispatch(changeTheme(themes.dark));

      default:
        break;
    }

    // dispatch();
  };
  if (menu_status) {
    return (
      <div
        className={`z-50 menu_box bg-[${background}] border-[${backgroundHolder}]`}
        ref={refs}
      >
        <button
          className={`menu_rows ${
            theme === "light"
              ? `text-[#0784c3]`
              : `text-[${font}] hover:bg-[${hover}] `
          }`}
          onClick={clickChangeTheme("light")}
        >
          <LightLogo
            width={22}
            height={22}
            twidth={0}
            theight={13}
            color={theme === "light" ? "#0784c3" : fontHolder}
            scale={0.01}
          />
          Light
        </button>
        <button
          className={`menu_rows text-[${font}] ${
            theme === "dim"
              ? `text-[#0784c3]`
              : `text-[${font}] hover:bg-[${hover}]`
          }`}
          onClick={clickChangeTheme("dim")}
        >
          <DimLogo
            width={22}
            height={22}
            twidth={0}
            theight={22}
            color={theme === "dim" ? "#0784c3" : fontHolder}
            scale={0.01}
          />
          Dim
        </button>
        <button
          className={`menu_rows text-[${font}] ${
            theme === "dark"
              ? `text-[#0784c3]`
              : `text-[${font}] hover:bg-[${hover}]`
          }`}
          onClick={clickChangeTheme("dark")}
        >
          <DarkLogo
            width={22}
            height={22}
            twidth={9}
            theight={22}
            color={theme === "dark" ? "#0784c3" : fontHolder}
            scale={0.025}
          />
          Dark
        </button>

        <hr className="menu_spliter" />
        <button className={`menu_rows text-[${font}] hover:bg-[${hover}]`}>
          <Setting
            width={22}
            height={22}
            twidth={9}
            theight={22}
            color={fontHolder}
            scale={0.025}
          />
          Setting
        </button>
      </div>
    );
  }
};
export default Menu;
