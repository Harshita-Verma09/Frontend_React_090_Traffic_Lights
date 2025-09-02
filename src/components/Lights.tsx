import React, { useEffect, useState } from "react";

const TrafficLight: React.FC = () => {
  const colors = ["red", "green", "yellow"];
  const [activeColor, setActiveColor] = useState("red");
  const [index, setIndex] = useState(0);

  useEffect(() => {                                                                                     
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setActiveColor(colors[(index + 1) % colors.length]);
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  
  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(180deg, #000000ff, #440e38ff)", // dark gradient
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "280px",
          background: "#1a1a1a",
          borderRadius: "30px",
          padding: "20px",
          boxShadow: "0px 0px 30px rgba(0,0,0,0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {colors.map((color) => (
          <div
            key={color}
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: activeColor === color ? color : "#333",
              boxShadow:
                activeColor === color
                  ? `0 0 25px 8px ${color}` // neon glow
                  : "inset 0 0 10px #000",
              transition: "all 0.5s ease",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
