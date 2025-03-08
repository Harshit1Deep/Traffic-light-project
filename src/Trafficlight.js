
import React, { useState, useEffect } from "react";

export default function Trafficlight({ trafficstates }) {
  const [currentcolor, setCurrentColor] = useState("green");  // Start with the green light

  useEffect(() => {
    const { duration, next } = trafficstates[currentcolor];  // Get duration and next color from the trafficstates object
    const timeoutId = setTimeout(() => {
      setCurrentColor(next);  // Change to the next color after the duration
    }, duration);

    return () => {
      clearTimeout(timeoutId);  // Cleanup the timeout when the component is unmounted
    };
  }, [currentcolor, trafficstates]);

  return (
    <div className="Traffic-light-container">
      {Object.keys(trafficstates).map((color) => (
        <div
          key={color}
          className="Traffic-light"
          style={{
            backgroundColor: currentcolor === color ? trafficstates[color].backgroundColor : "gray",  // Display only the current color
          }}
        />
      ))}
    </div>
  );
}
