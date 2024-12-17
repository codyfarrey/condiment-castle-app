import React from "react";

export default function StatusOrb({ isOnline }) {
  return (
    <div className="statusOrb"
      style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: isOnline ? "#21E862" : "#993335",
        display: "inline-block",
      }}
      aria-label={isOnline ? "Online" : "Offline"}
    ></div>
  );
}