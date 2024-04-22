import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './component/Main';
import Signup from './component/Auth/Signup/Signup';
import Login from './component/Auth/Login/Login';
import { useSelector } from 'react-redux';
import "./App.css"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userDetails = useSelector((state) => state.location.userdetails);

  useEffect(() => {
    if (Object.keys(userDetails).length>0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userDetails]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Main /> : <Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
