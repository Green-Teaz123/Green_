import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './component/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import King_louy from './page/indexmain';
import OrderInfo from './page/orderInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<King_louy />}></Route>
      <Route path="/orderinfo" element={<OrderInfo />}></Route>
    </Routes>
</BrowserRouter>
);

