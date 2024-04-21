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
    <div className="cursor-pointer mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {pollutionData.map((pollution, index) => (
        <div
          key={index}
          style={{ backgroundColor: pollution.color, marginBottom: '10px', padding: '5px' }}
          className="text-white text-center"
        >
          {pollution.level}
        </div>
      ))}
    </div>
  );
};

export default Message;
