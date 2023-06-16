import React, { useEffect, useRef, useState } from "react";
import themes from "../../../assets/theme.json";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../../actions/index";
import { LightLogo, DarkLogo, DimLogo, Setting } from "../../../assets/Icons";

function Mode() {
  const dispatch = useDispatch();
  const {
    font,
    fontHolder,
    button,
    hover,
    background,
    backgroundHolder,
    border,
    theme,
  } = useSelector((state) => state);
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
  };

  const buttonArray = [
    {
      component: (
        <LightLogo
          width={22}
          height={22}
          twidth={0}
          theight={22}
          color={theme === "light" ? "#0784c3" : fontHolder}
          scale={0.01}
        />
      ),
      text: "Light",
    },
    {
      component: (
        <DimLogo
          width={22}
          height={22}
          twidth={0}
          theight={22}
          color={theme === "dim" ? "#0784c3" : fontHolder}
          scale={0.01}
        />
      ),
      text: "Dim",
    },
    {
      component: (
        <DarkLogo
          width={22}
          height={22}
          twidth={0}
          theight={22}
          color={theme === "dark" ? "#0784c3" : fontHolder}
          scale={0.01}
        />
      ),
      text: "Dark",
    },
    {
      component: (
        <Setting
          width={22}
          height={22}
          twidth={9}
          theight={22}
          color={fontHolder}
          scale={0.025}
        />
      ),
      text: "Setting",
    },
  ];

  const spliter_idex = 3;

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
        className={`mode bg-[${button}] border-[${border}] hover:bg-[${hover}] ${
          menu_status ? `bg-[${hover}]` : ""
        }`}
        onClick={() => {
          setMenuStatus(!menu_status);
        }}
        ref={mode_button}
      >
        {themeModeIcon()}
      </button>
      {menu_status ? (
        <div
          className={`menu_box bg-[${background}] border-[${border}]`}
          ref={menu_bar}
        >
          {buttonArray.map((item, index) => {
            return (
              <>
                <button
                  key={index}
                  className={`menu_rows ${
                    theme === item.text.toLowerCase()
                      ? `text-[#0784c3]`
                      : `text-[${font}] hover:bg-[${hover}] `
                  }`}
                  onClick={clickChangeTheme(item.text.toLowerCase())}
                >
                  {item.component}
                  {item.text}
                </button>
                {spliter_idex - 1 === index ? <hr /> : <></>}
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Mode;
