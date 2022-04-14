import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Login from "./login/Login";
import ProductCart from "./productcart/index"
import Register from "./register/Register"
import { DataContextProvider } from './context/data'



ReactDOM.createRoot(document.querySelector("#root")).render(
  <DataContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="productcart" element={<ProductCart />} />
      </Routes>
    </BrowserRouter>
  </DataContextProvider>);