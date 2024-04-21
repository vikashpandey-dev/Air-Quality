import React, { useState } from 'react';

function Header() {
  // Define state variables for country, state, and city
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Define arrays for countries, states, and cities (dummy data)
  const countries = ['India'];
  const states = {
    India: ['Uttar Pradesh', 'Maharashtra', 'Karnataka'], // States for India
  };
  const cities = {
    'Uttar Pradesh': ['Allahabad', 'Lucknow', 'Kanpur'], // Cities for Uttar Pradesh
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'], // Cities for Maharashtra
    Karnataka: ['Bangalore', 'Mysore', 'Hubli'], // Cities for Karnataka
  };

  // Event handler for country selection
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    // Reset state and city selections
    setSelectedState('');
    setSelectedCity('');
  };

  // Event handler for state selection
  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    // Reset city selection
    setSelectedCity('');
  };

  // Event handler for city selection
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
  };

  return (
    <div>
      <h3>Choose Your Location</h3>
      {/* Country Header */}
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {/* State Header */}
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {states[selectedCountry] &&
          states[selectedCountry].map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
      </select>
      {/* City Header */}
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select City</option>
        {cities[selectedState] &&
          cities[selectedState].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Header;
