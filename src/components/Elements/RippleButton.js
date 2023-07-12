import { useRef } from "react";
import "./Button/style.css";
import { useClickAnimation } from "./Button/useClickAnimation";

export default function RippleButton({ ButtonTitle, className }) {
  const buttonRef2 = useRef();

  useClickAnimation(buttonRef2, {
    color: "white",
    size: 50,
    duration: 1000,
    effectName: "square-rotate",
  });

  return (
    <div className="App">
      <div className={"button-container"}>
        <button className={className} ref={buttonRef2} type="button">
          <span>{ButtonTitle}</span>
        </button>
      </div>
    </div>
  );
}
