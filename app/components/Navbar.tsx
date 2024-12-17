import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Condiment Castle</div>
      <ul style={styles.navLinks}>
        <li><a href="#astroneer" style={styles.link}>Astroneer</a></li>
        <li><a href="#minecraft" style={styles.link}>Minecraft</a></li>
        <li><a href="#valheim" style={styles.link}>Valheim</a></li>
      </ul>
    </nav>
  );
}

// Inline styles (you can replace this with CSS Modules or Tailwind)
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    transition: "color 0.2s",
  },
  linkHover: {
    color: "#ffdd57", // Highlight color
  },
};