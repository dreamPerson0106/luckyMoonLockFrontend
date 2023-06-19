import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const { background, mainBg } = useSelector((state) => state);
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
          minHeight: "calc(50rem - 80px)",
          paddingTop: 80,
        }}
      >
        <Outlet />
      </div>
      <Footer />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Layout;
