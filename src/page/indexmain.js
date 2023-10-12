import React from "react";
import OrderStyle from "../component/orderStyle";
import Order from "../component/Order";
import "../styles/main.css";

export default function King_louy() {
    return (
    <div>
        <div className="create-order">
            <input type="submit" value="Create your meal +" />
        </div>
        <OrderStyle />

        {/* created order status didn't pick */}
        <Order />

        {/* created order status picked */}
        <Order />

        


    </div>

    );
}
