import React from "react";
import OrderStyle from "../component/orderStyle";
import Order from "../component/Order";
import "../styles/main.css";

export default function King_louy() {
    const to_the_next_package = () => {
        window.location.href = "http://localhost:3000/create";
    }
    return (
        <div>
            <div className="create-order">
                <input type="submit" value="Create your meal +" onClick={to_the_next_package} className="only-indexmain-input"/>
            </div>
            <OrderStyle />

            {/* created order status didn't pick */}
            <Order />

            {/* created order status picked */}
            


        </div>

    );
}
