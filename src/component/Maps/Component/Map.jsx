import React from "react";
import GoogleMapReact from 'google-map-react';

function getColor(aqius) {
    if (aqius >= 0 && aqius <= 50) {
      return 'green';
    } else if (aqius >= 51 && aqius <= 100) {
      return 'yellow';
    } else if (aqius >= 101 && aqius <= 200) {
      return 'orange';
    } else if (aqius >= 201 && aqius <= 300) {
      return 'red';
    } else if (aqius >= 301 && aqius <= 400) {
      return 'purple';
    } else {
      return 'maroon';
    }
}

const AnyReactComponent = ({ text }) => (
  <div className='myBounceDiv'>
    <div id="marker" className="pin" style={{ backgroundColor: getColor(text.current.pollution.aqius) }}>
      {text.current.pollution.aqius}
    </div>
    <div className='pulse'></div>
  </div>
);

export default function SimpleMap({ records }) {
  const defaultCenter = {
    lat: parseFloat(records.location.coordinates[1]),
    lng: parseFloat(records.location.coordinates[0])
  };

  // Calculate zoom level based on the radius or any other relevant data
  const calculateZoomLevel = () => {
    // Example calculation: Assuming records have a radius property
    const radius = parseFloat(records.radius);
    if (radius <= 10) return 15; // Zoom level for small radius
    else if (radius <= 50) return 12; // Zoom level for medium radius
    else return 10; // Default zoom level
  };

  const defaultProps = {
    center: defaultCenter,
    zoom: calculateZoomLevel() // Calculate the zoom level dynamically
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBaGHp3hW_TgoyCcbkuUogkIQqzolYdpmc" }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultCenter.lat}
          lng={defaultCenter.lng}
          text={records}
        />
      </GoogleMapReact>
    </div>
  );
}
