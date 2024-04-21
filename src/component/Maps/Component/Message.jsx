import React from 'react';

const Message = () => {
    const pollutionData = [
        { level: "Good", color: "green" },
        { level: "Moderate", color: "yellow" },
        { level: "Unhealthy for Sensitive Groups", color: "orange" },
        { level: "Unhealthy", color: "red" },
        { level: "Very Unhealthy", color: "purple" },
        { level: "Hazardous", color: "maroon" }
      ];
      
  return (
    <div>
      {pollutionData.map((pollution, index) => (
        <div
          key={index}
          style={{ backgroundColor: pollution.color, marginBottom: '10px', padding: '5px' }}
        >
          {pollution.level}
        </div>
      ))}
    </div>
  );
};

export default Message;
