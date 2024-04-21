import React from "react";
import Map from "./Map"

import "./App.css"
import Message from "../Message"
function Mapprop() {
  const latitude = 25.44478;
  const longitude = 81.84322;
  let data = [{
    "status": "success",
    "data": {
      "city": "Allahabad",
      "state": "Uttar Pradesh",
      "country": "India",
      "location": {
        "type": "Point",
        "coordinates": [
          81.84322,
          25.44478
        ]
      },
      "current": {
        "pollution": {
          "ts": "2024-04-20T16:00:00.000Z",
          "aqius": 99,
          "mainus": "p1",
          "aqicn": 102,
          "maincn": "p1"
        },
        "weather": {
          "ts": "2024-04-20T16:00:00.000Z",
          "tp": 34,
          "pr": 1002,
          "hu": 15,
          "ws": 3.53,
          "wd": 300,
          "ic": "04n"
        }
      }
    }
  }]
  return (
    <>
      <div style={{ width: "90%", height: "90%" }}>
        {data.map((records, i) => {
          return (
            <>
              <Map records={records} />

            </>
          )
        })}
      </div>
    </>
  );
}

export default Mapprop;
