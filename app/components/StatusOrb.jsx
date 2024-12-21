import React from "react";

export default function StatusOrb({ status }) {

  const determineStatusOrbColor = () => {
      if (status == "Online") {
        return "#21E862";
      } else if (status == "Starting") {
        return "#993335";
      } else {
        return "#993335";
      }
  }

  return (
    <div className="statusOrb"
      style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: determineStatusOrbColor(),
        display: "inline-block",
      }}
      aria-label={status}
    ></div>
  );
}