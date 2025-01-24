import React from "react";

const Button = ({  onClick, children }) => {
 
  const buttonStyle = {
    backgroundColor: "#000000", 
    color: "#00ff00", 
    fontFamily: "'Poppins', sans-serif", 
    fontSize: "16px",
    padding: "10px 20px",
    border: "2px solid #00ff00",
    borderRadius: "10px", 
    cursor: "pointer",
    display: "flex", 
    alignItems: "center",
    justifyContent: "center",
    gap: "8px", 
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
      {children} 
     
    </button>
  );
};

export default Button;
