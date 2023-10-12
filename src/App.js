import React from 'react';
import './App.css';
import Header from './component/header';
// import Login from './page/login';
import Kinglouy from './page/createOrder';
import OrderInfo from './page/orderInfo';

function App() {
  return (
    <div>
      {/* <Kinglouy /> */}
      <OrderInfo />
    </div>
  );
}

export default App;
