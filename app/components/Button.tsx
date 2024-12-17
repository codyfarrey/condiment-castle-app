"use client";

import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
};

export default Button;

const styles = {
  button: {
    padding: "5px 20px",
    fontSize: "14px",
    backgroundColor: "#0099CC",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  } as React.CSSProperties, // TypeScript typing for styles
};