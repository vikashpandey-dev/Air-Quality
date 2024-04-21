import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './component/Index';
import Signup from './component/Auth/Signup/Signup';
import Login from './component/Auth/Login/Login';
import { useSelector, useDispatch } from "react-redux";
import "./App.css"
function App() {
  const countrys = useSelector((state) => state.location.userdetails); 
  console.log(countrys.displayName,"adasdasdasd")
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: countrys.displayName? <Index /> : <Login />, // Render Index if countrys data exists, otherwise render Login
        },
        // {
        //   path: "/Signup",
        //   element: <Signup />,
        // },
        // {
        //   path: "/Login",
        //   element: <Login />,
        // },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
