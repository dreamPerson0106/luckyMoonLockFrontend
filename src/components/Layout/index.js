import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import PagewithTransition from "./PagewithTransition";

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
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Layout;
