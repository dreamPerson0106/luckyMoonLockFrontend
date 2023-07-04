import React from "react";
import {
  TwitterLogo,
  TelegramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "../../../assets/Icons.js";
import "./footer.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { font, background, border } = useSelector((state) => state.theme);
  return (
    <footer
      className={`footer mainfooter d-block bottom-0 w-full bg-[${background}] text-[${font}] border-[${border}]`}
    >
      <div className="footer">
        <Link to={`https://www.twitter.com`} target="_blank">
          <TwitterLogo width={33} height={29} color={font} />
        </Link>
        <Link to={`https://www.telegram.org`} target="_blank">
          <TelegramLogo width={33} height={29} color={font} />
        </Link>
        <Link to={`https://www.facebook.com`} target="_blank">
          <FacebookLogo width={15} height={29} color={font} />
        </Link>
        <Link to={`https://www.whatsapp.com`} target="_blank">
          <WhatsappLogo width={33} height={29} color={font} />
        </Link>
      </div>
      <p>
        Terms and Conditions <span className="mx-10">|</span> Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
