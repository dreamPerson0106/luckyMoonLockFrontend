import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PagewithTransition from "./PagewithTransition";
import TokenList from "./TokenList";
import "./layout.css";

const Layout = () => {
  const { background, mainBg, theme } = useSelector((state) => state.theme);
  useEffect(() => {
    document.body.classList.add(`bg-[${background}]`);

    return () => {
      document.body.classList.remove(`bg-[${background}]`);
    };
  });

  return (
    <>
      <Navbar />
      <div
        style={{
          background: mainBg,
          minHeight: "85vh",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 80,
        }}
      >
        <TokenList />
        <PagewithTransition>
          <Outlet />
        </PagewithTransition>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === "light" ? "light" : "dark"}
      />
    </>
  );
};

export default Layout;
