import React, { useState } from "react";

const Input = ({
  className,
  style,
  placeholder,
  type,
  invalid,
  invalidText,
  value,
  onChange,
  step,
}) => {
  const [invalidState, setInvalidState] = useState(false);
  return (
    <div className="flex-col w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={
          invalidState
            ? className +
              " text-red-300 border-red-600 placeholder:text-red-300"
            : className
        }
        style={style}
        value={value}
        onChange={onChange}
        onBlur={() => {
          if (invalid) {
            setInvalidState(true);
          } else {
            setInvalidState(false);
          }
        }}
        step={step}
        pattern="[1-9][0-9]*"
      />
      {invalidState ? (
        <p className="text-md text-red-600 px-2">{invalidText}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
