import React from "react";
import Header from "../component/header";
import OrderStyle from "../component/orderStyle";
import Order from "../component/Order";
import "../styles/nong_IT.css";

export default function King_louy() {
    return (
    <div>
        <Header />
        <div className="create-order">
            <input type="text" placeholder="Create your meal +" />
        </div>
        <OrderStyle />

        {/* created order status didn't pick */}
        <Order />

        {/* created order status picked */}
        <Order />

        


    </div>

    );
}
