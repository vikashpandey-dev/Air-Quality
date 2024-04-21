import React, { useState } from "react";
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
     

      return 'maroon'; // Or handle this case as needed
    }
  }
const AnyReactComponent = ({ text }) => (
    
    <div class='myBounceDiv'>
       {getColor(text.data.current.pollution.aqius)}
       <div id="marker"  className="pin" style={{backgroundColor:getColor(text.data.current.pollution.aqius)}}>
  {text.data.current.pollution.aqius}
</div>

    <div class='pulse'></div>
    </div>
);

export default function SimpleMap({ records }) {
    console.log(records, "recordsrecords")

    const defaultCenter = {
        lat: parseFloat(records.data.location.coordinates[1]),
        lng: parseFloat(records.data.location.coordinates[0])
    };

    const defaultProps = {
        center: defaultCenter,
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBaGHp3hW_TgoyCcbkuUogkIQqzolYdpmc" }} // Replace "YOUR_API_KEY" with your actual Google Maps API key
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
