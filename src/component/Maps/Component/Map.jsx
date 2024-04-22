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
  const APIKEY='AIzaSyBaGHp3hW_TgoyCcbkuUogkIQqzolYdpmc'
  const defaultCenter = {
    lat: parseFloat(records.location.coordinates[1]),
    lng: parseFloat(records.location.coordinates[0])
  };


  const calculateZoomLevel = () => {
   
    const radius = parseFloat(records.radius);
    if (radius <= 10) return 15; 
    else if (radius <= 50) return 12; //
    else return 10; //
  };

  const defaultProps = {
    center: defaultCenter,
    zoom: calculateZoomLevel() 
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKEY }}
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
