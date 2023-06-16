import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UniswapIcon, PancakeIcon, CamelotIcon } from "../../../assets/Icons";
import { Link } from "react-router-dom";

const BrowserMenu = ({ children }) => {
  const {
    font,
    fontHolder,
    background,
    backgroundHolder,
    border,
    hover,
    theme,
  } = useSelector((state) => state);
  const [menu_status, setMenuStatus] = useState(false);
  const btn_self = useRef(null);
  const browser_menu = useRef(null);
  const buttonArray = [
    {
      component: <UniswapIcon width={"30px"} height={"30px"} />,
      text: "Uniswap v2",
    },
    {
      component: <PancakeIcon width={"30px"} height={"30px"} />,
      text: "Pancakeswap v2",
    },
    {
      component: <CamelotIcon width={"30px"} height={"30px"} />,
      text: "Camelot",
    },
  ];

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        browser_menu.current &&
        !browser_menu.current.contains(event.target) &&
        btn_self.current &&
        !btn_self.current.contains(event.target)
      ) {
        // Clicked outside the div
        setMenuStatus(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [browser_menu]);

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
          className={`menu_box bg-[${background}] border-[${border}]`}
          style={{ top: 30, right: -80, minWidth: 250 }}
          ref={browser_menu}
        >
          <input
            type="text"
            placeholder="Select an exchange"
            className={`px-4 text-xs text-[${font}] border-b-[1px] border-[${border}] bg-[${background}]`}
          />

          {buttonArray.map((item, index) => {
            return (
              <>
                <hr />
                <Link
                  to={item.text.replace(" ", "").toLowerCase()}
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
                </Link>
              </>
            );
          })}
          <hr />
          <div className={`flex text-xs px-4 py-1 text-[${fontHolder}]`}>
            other exchanges
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BrowserMenu;
