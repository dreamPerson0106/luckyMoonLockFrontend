import React from "react";
import TwitterLogo from "../../Logos/TwitterLogo.js";
import TelegramLogo from "../../Logos/TelegramLogo.js";
import FacebookLogo from "../../Logos/FacebookLogo.js";
import WhatsappLogo from "../../Logos/WhatsappLogo.js";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer d-block">
      <div className="footer">
        <TwitterLogo width={33} height={29} />
        <TelegramLogo width={33} height={29} />
        <FacebookLogo width={15} height={29} />
        <WhatsappLogo width={33} height={29} />
      </div>
      <p>Terms and Conditions | Privacy Policy</p>
    </footer>
  );
};

export default Footer;
