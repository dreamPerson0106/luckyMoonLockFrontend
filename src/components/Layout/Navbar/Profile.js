import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProfileuserIcon } from "../../../assets/Icons";

function Profile() {
  const { button, hover, font, background, backgroundHolder, border } =
    useSelector((state) => state);
  return (
    <div>
      <button
        className={`conbtn bg-[${button}] text-[${font}] border-[${border}] hover:bg-[${hover}] rounded-full mr-2`}
      >
        <ProfileuserIcon
          width={22}
          height={22}
          fill={"#bbbbbb"}
        ></ProfileuserIcon>
        <Link to={"profile"}></Link>
      </button>
    </div>
  );
}

export default Profile;
