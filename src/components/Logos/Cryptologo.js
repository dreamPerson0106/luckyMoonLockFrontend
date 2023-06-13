import React from "react";

function Cryptologo({width, height}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8.75625L5.3775 17.5125L10.755 8.75625L5.3775 0L0 8.75625ZM8.26619 8.28656L5.3775 9.3995L2.48881 8.28662L5.3775 3.58287L8.26619 8.28656ZM3.34956 10.6275L5.3775 11.4088L7.40544 10.6275L5.3775 13.9296L3.34956 10.6275Z"
        fill="white"
      />
    </svg>
  );
}

export default Cryptologo;
