import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loader_body">
      <div
        className="loader"
        style={{ "--bg": "hsl(36.774894284791806, 100%, 85%)" }}
      >
        <div className="dot" style={{ "--index": 0 }}></div>
        <div className="dot" style={{ "--index": 1 }}></div>
        <div className="dot" style={{ "--index": 2 }}></div>
        <div className="dot" style={{ "--index": 3 }}></div>
        <div className="dot" style={{ "--index": 4 }}></div>
        <div className="dot" style={{ "--index": 5 }}></div>
        <div className="dot" style={{ "--index": 6 }}></div>
        <div className="dot" style={{ "--index": 7 }}></div>
      </div>
    </div>
  );
};

export default Loading;
