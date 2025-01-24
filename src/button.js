import React from "react";

const Button = ({  onClick, children }) => {
  // Define inline styles
  const buttonStyle = {
    backgroundColor: "#000000", // Replace with the black color from Figma
    color: "#00ff00", // Replace with the green color from Figma
    fontFamily: "'Poppins', sans-serif", // Ensure Poppins font is loaded
    fontSize: "16px",
    padding: "10px 20px",
    border: "2px solid #00ff00",
    borderRadius: "10px", // Adjust as per design
    cursor: "pointer",
    display: "flex", // Ensure the icon and text are aligned properly
    alignItems: "center",
    justifyContent: "center",
    gap: "8px", // Add spacing between the icon and text
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 4px 10px rgba(0, 255, 0, 0.5)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children} {/* Render children, e.g., icons */}
     
    </button>
  );
};

export default Button;
