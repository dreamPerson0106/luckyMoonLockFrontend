import React from "react";
import { useSelector } from "react-redux";

function WithdrawSetting() {
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

  const optionsArray = [
    {
      component: {},
      text: {},
    },
  ];

  return <div>WithdrawSetting</div>;
}

export default WithdrawSetting;
