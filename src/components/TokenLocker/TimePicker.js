import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useSelector } from "react-redux";
import { CalandarIcon } from "../../assets/Icons";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const TimePicker = () => {
  const { font, background, border, hover } = useSelector((state) => state);
  const [calendar, setCalendar] = useState(null);
  const child = useRef();

  const changeHoverBackground = (className) => {
    try {
      console.log(className);
      const changeClassName = child.current.querySelector("." + className);
      changeClassName.style.borderRadius = "10px";
      changeClassName.addEventListener("mouseover", () => {
        changeClassName.style.backgroundColor = hover;
      });

      changeClassName.addEventListener("mouseout", () => {
        changeClassName.style.backgroundColor = background;
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(child);

  useEffect(() => {
    if (calendar) {
      changeHoverBackground("rdtBtn");
    } else {
      setCalendar(child.current.parentNode);
      child.current.parentNode.style.backgroundColor = background;
      child.current.parentNode.style.borderColor = border;
      child.current.parentNode.style.borderRadius = "10px";
      child.current.parentNode.style.right = 0;
      child.current.parentNode.style.boxShadow =
        "0 3px 10px rgba(151, 164, 175, 0.05)";
      changeHoverBackground("rdtPrev");
      changeHoverBackground("rdtSwitch");
      changeHoverBackground("rdtNext");
      changeHoverBackground("rdtTimeToggle");
    }
  }, [Datetime]);

  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const renderInput = (props, openCalendar) => {
    return (
      <div className="relative w-full p-3">
        <input
          {...props}
          placeholder="Select Date and times"
          className={`text-[${font}] bg-[${background}] !important w-full p-3`}
        />
        <button onClick={openCalendar} className="absolute top-3 right-1 ">
          <CalandarIcon />
        </button>
        <div className="bg-black">
          <div className="bg-black"></div>
        </div>
      </div>
    );
  };

  const renderView = (mode, renderDefault) => {
    if (mode === "time") return renderDefault();
    return (
      <div className={`wrapper bg-[${background}]`} ref={child}>
        {renderDefault()}
      </div>
    );
  };

  const renderDay = (props, currentDate, selectedDate) => {
    return (
      <td {...props} className={`hover:bg-[${hover}] rounded-md `}>
        {currentDate.date()}
      </td>
    );
  };

  const renderMonth = (props, month, selectedDate) => {
    // Display the month index in the months view
    return (
      <td {...props} className={`hover:bg-[${hover}] rounded-md py-2`}>
        {monthList[parseInt(month)]}
      </td>
    );
  };

  const renderYear = (props, year, selectedDate) => {
    // Just display the last 2 digits of the year in the years view
    return (
      <td {...props} className={`hover:bg-[${hover}] rounded-md py-2`}>
        {year}
      </td>
    );
  };

  const inputProps = {
    placeholder: "Select Date and times",
    className: `text-[${font}] bg-[${background}] !important w-full p-3`,
    readOnly: true,
  };

  return (
    <Datetime
      renderInput={renderInput}
      renderView={renderView}
      inputProps={inputProps}
      renderDay={renderDay}
      renderYear={renderYear}
      renderMonth={renderMonth}
    />
  );
};

export default TimePicker;
