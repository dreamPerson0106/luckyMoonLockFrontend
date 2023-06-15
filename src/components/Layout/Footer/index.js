import React from "react";
import {
  TwitterLogo,
  TelegramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "../../../assets/Icons.js";
import "./footer.css";
import { useSelector } from "react-redux";

const Footer = () => {
  const { font, background, backgroundholder } = useSelector((state) => state);
  return (
    <footer
      className={`footer d-block fixed bottom-0 w-full bg-[${background}] text-[${font}] border-[${backgroundholder}] border-t-[1px]`}
    >
      <div className="footer">
        <TwitterLogo width={33} height={29} color={font} />
        <TelegramLogo width={33} height={29} color={font} />
        <FacebookLogo width={15} height={29} color={font} />
        <WhatsappLogo width={33} height={29} color={font} />
      </div>
      <p>
        Terms and Conditions <span className="mx-10">|</span> Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
