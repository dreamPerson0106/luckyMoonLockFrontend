import React from "react";
import {
  TwitterLogo,
  TelegramLogo,
  FacebookLogo,
  WhatsappLogo,
} from "../../../assets/Icons.js";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer d-block fixed bottom-0 w-full">
      <div className="footer">
        <TwitterLogo width={33} height={29} />
        <TelegramLogo width={33} height={29} />
        <FacebookLogo width={15} height={29} />
        <WhatsappLogo width={33} height={29} />
      </div>
      <p>
        Terms and Conditions <span className="mx-10">|</span> Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
