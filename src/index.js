import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import King_louy from './page/indexmain';
import OrderInfo from './page/orderInfo';
import CreateOrder from './page/createOrder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<King_louy />}></Route>
      <Route path="/orderinfo" element={<OrderInfo />}></Route>
      <Route path="/create" element={<CreateOrder />}></Route>
    </Routes>
</BrowserRouter>
);

