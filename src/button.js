import React from 'react';

const Button = ({ text = "Give Feedback", onClick }) => {
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
      {text}
    </button>
  );
};

export default Button;
