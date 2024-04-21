import React, { useState } from "react";
import Map from "./Map"
import { useSelector, useDispatch } from "react-redux";

function Mapprop() {
  const [aqidata,setaqidata]=useState([])
  const myaqidata = useSelector((state) => state.location.AqiData);

console.log(aqidata,"myaqidatamyaqidata")

  const latitude = 25.44478;
  const longitude = 81.84322;
  let data = {
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
  }
  return (
    <>
      <div style={{ width: "100%", height: "80%" }}>
            <>
            {myaqidata && myaqidata.data?(<Map records={myaqidata.data} />):(<Map records={data.data} />)}
            </>
      </div>
    </>
  );
}

export default Mapprop;
