import React, { useState } from "react";



const StudentCard = ({ photoSrc, name, age, rollNo }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="student-card"
      style={{
        width: "100%",
        paddingBottom: "100%",
        borderRadius: "50%",
        backgroundColor: "#e0e0e0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={photoSrc}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
          transform: hovered ? "rotateY(-180deg)" : "rotateY(0deg)",
          opacity: hovered ? "0" : "1",
          transition: "opacity 0.3s ease"
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "0",
          left: "0",
          transform: hovered ? "rotateY(-180deg)" : "rotateY(0deg)",
          opacity: hovered?"0": "1",
          transition: "transform 0.3s ease"
        }}
      >
              {hovered? <div>hovered 180 degere</div>: <div>hovered 220 degree</div>}
        <p>{name}</p>
        <p>Age: {age}</p>
        <p>Roll No: {rollNo}</p>
      </div>


    </div>
  );
};


export default StudentCard;
