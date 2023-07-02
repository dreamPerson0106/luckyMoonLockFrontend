import React from "react";
import { useSelector } from "react-redux";

const ViewTokenLocker = () => {
  const { border, background } = useSelector((state) => state);
  return (
    <div className={`box_1 bg-[${background}] border-[${border}] p-5`}>
      ViewTokenLocker
    </div>
  );
};

export default ViewTokenLocker;
