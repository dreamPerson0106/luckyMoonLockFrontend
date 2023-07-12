import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProfileuserIcon } from "../../../assets/Icons";

function Profile() {
  const { button, hover, font, background, backgroundHolder, border } =
    useSelector((state) => state.theme);
  return (
    <div>
      <Link
        to={"profile"}
        className={`duration-500 ease-in-out conbtn bg-[${button}] text-[${font}] border-[${border}] hover:bg-[${hover}] rounded-full mr-2`}
      >
        <ProfileuserIcon className={`w-6 h-6 fill-[#bbbbbb]`} />
      </Link>
    </div>
  );
}

export default Profile;
