import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { GetCountrys, GetState, setAqiData } from "../../../redux/Location/Location-Action";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header() {
 
    const notify = () => toast("Something went wrong");
    const dispatch = useDispatch();
    const [state, setState] = useState([]);
    const countrys = useSelector((state) => state.location.country);
    const username = useSelector((state) => state.location.userdetails); 
//   console.log(username.displayName,"adasdasdasd")
   
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [city, setCity] = useState([]);
    const [AqiData, setAqidata] = useState(null);

    useEffect(() => {
        dispatch(GetCountrys());
    }, [username]);

    const handleCountryChange = async (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        await GetMyState(country);
        setSelectedState('');
        setSelectedCity('');
    };

    const GetMyState = async (country) => {
        const apiUrl = `http://api.airvisual.com/v2/states?country=${country}&key=a36a5c13-d5b4-4674-bb66-a74b2a2e48d5`;
        try {
            const response = await axios.get(apiUrl);
            if (response.status === 200) {
                setState(response.data.data)
            } else {
            notify()

                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            notify()

            console.error('Error fetching data:', error.message);
        }
    }

    const getCity = async (state) => {
        const apiUrl = `http://api.airvisual.com/v2/cities?state=${state}&country=${selectedCountry}&key=a36a5c13-d5b4-4674-bb66-a74b2a2e48d5`;
        try {
            const response = await axios.get(apiUrl);
            if (response.status === 200) {
                setCity(response.data.data)
            } else {
            notify()

                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            notify()

            console.error('Error fetching data:', error.message);
        }
    }

    const handleStateChange = async (event) => {
        const state = event.target.value;
        setSelectedState(state);
        getCity(state);
        setSelectedCity('');
    };

    const handleCityChange = async (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        await getAQI(city);
    };

    const getAQI = async (city) => {
        const apiUrl = `http://api.airvisual.com/v2/city?city=${city}&state=${selectedState}&country=${selectedCountry}&key=a36a5c13-d5b4-4674-bb66-a74b2a2e48d5`;
        try {
            const response = await axios.get(apiUrl);
            if (response.status === 200) {
                setAqidata(response.data.data)
                dispatch(setAqiData(response.data))
            } else {
            notify()

                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            notify()
            console.error('Error fetching data:', error.message);
        }
    }

    return (
        
        <div className="container mx-auto py-4">
        <ToastContainer />
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Choose Your Location</h3>
          <h3>User Name: {username.displayName}</h3>
        </div>
        <div className="flex flex-wrap justify-between mb-4">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <label className="block mb-2">Country:</label>
            <select value={selectedCountry} onChange={handleCountryChange} className="w-full px-2 py-1 border rounded">
              <option value="">Select Country</option>
              {countrys.map((country, index) => (
                <option key={index} value={country.country}>
                  {country.country}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <label className="block mb-2">State:</label>
            <select value={selectedState} onChange={handleStateChange} className="w-full px-2 py-1 border rounded">
              <option value="">Select State</option>
              {state.map((state, index) => (
                <option key={index} value={state.state}>
                  {state.state}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/3">
            <label className="block mb-2">City:</label>
            <select value={selectedCity} onChange={handleCityChange} className="w-full px-2 py-1 border rounded">
              <option value="">Select City</option>
              {city.map((city, index) => (
                <option key={index} value={city.city}>
                  {city.city}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* AQI Data */}
        {/* {AqiData && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">AQI Data:</h3>
            <div className="border rounded p-4">
              <p className="mb-2">AQI: {AqiData.current.pollution.aqius}</p>
              <p className="mb-2">Main Pollutant: {AqiData.current.pollution.mainus}</p>
              <p>Timestamp: {AqiData.current.pollution.ts}</p>
            </div>
          </div>
        )} */}
      </div>
    );
}

export default Header;
