import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from './App';
import Login from "./login/Login" ;
import Register from "./register/Register"



ReactDOM.createRoot(document.querySelector("#root")).render(<BrowserRouter>
  <Routes>
   <Route path="/" element={<App />} />
   <Route path="register" element={<Register />} />
   <Route path="login" element={<Login />} />
 </Routes>
</BrowserRouter>);