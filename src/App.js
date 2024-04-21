import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './component/Index';
import Signup from './component/Auth/Signup/Signup';
import Login from './component/Auth/Login/Login';
import { useSelector } from 'react-redux';
import "./App.css"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userDetails = useSelector((state) => state.location.userdetails);
console.log(userDetails,"userDetailsuserDetails")
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
        <Route path="/" element={isLoggedIn ? <Index /> : <Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
