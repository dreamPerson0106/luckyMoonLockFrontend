import { useRef } from "react";
import "./Button/style.css";
import { useClickAnimation } from "./Button/useClickAnimation";

export default function RippleButton(props) {
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
        <button
          {...props}
          className={props.className}
          ref={buttonRef2}
          type="button"
        >
          <span>{props.ButtonTitle}</span>
        </button>
      </div>
    </div>
  );
}
