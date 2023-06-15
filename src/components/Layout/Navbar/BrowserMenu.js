import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const BrowserMenu = ({ children }) => {
  const { font, fontHolder, background, backgroundHolder, hover, theme } =
    useSelector((state) => state);
  const [menu_status, setMenuStatus] = useState(false);
  const btn_self = useRef(null);
  const browser_menu = useRef(null);
  const buttonArray = [{ component: "ss", text: "ss" }];
  return (
    <div className=" relative">
      <button
        onClick={() => {
          setMenuStatus(!menu_status);
        }}
        ref={btn_self}
      >
        {children}
      </button>
      {menu_status ? (
        <div
          className={`menu_box bg-[${background}] border-[${backgroundHolder}]`}
          style={{ top: 30, right: "-70%" }}
          ref={browser_menu}
        >
          <input
            type="text"
            placeholder="Select an exchange"
            className={`text-xs text-[${font}] border-b-2 border-[${backgroundHolder}]`}
          />

          {buttonArray.map((item, index) => {
            return (
              <>
                <hr />
                <button
                  key={index}
                  className={`menu_rows ${
                    theme === item.text.toLowerCase()
                      ? `text-[#0784c3]`
                      : `text-[${font}] hover:bg-[${hover}] `
                  }`}
                  // onClick={clickChangeTheme(item.text.toLowerCase())}
                >
                  {item.component}
                  {item.text}
                </button>
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BrowserMenu;
