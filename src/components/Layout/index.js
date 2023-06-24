import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PagewithTransition from "./PagewithTransition";

const Layout = () => {
  const { background, mainBg, theme } = useSelector((state) => state);
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
          backgroundImage: mainBg,
          minHeight: "85vh",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 80,
        }}
      >
        <PagewithTransition>
          <Outlet />
        </PagewithTransition>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
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
