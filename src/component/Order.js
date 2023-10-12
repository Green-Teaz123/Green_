import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/Order.css";

export default function Order() {
    const [orders, setOrders] = useState([]);

    const changePage = () => {
        // window.location.href = "http://localhost:3000/orderInfo";
        window.location.href = "http://localhost:3000/orderInfo";
    }

    useEffect(() => {
        // Make an API request when the component mounts
        fetch("http://localhost:5000/api/getOrders")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // Handle the API response, for example, set the orders in state
                setOrders(data);
            })
            .catch(error => {
                // Handle any errors from the API request
                console.error("Error fetching orders:", error);
            });
    }, []);

    return (
        <div className="order" onClick={changePage}>
            {orders.map(order => (
                <div className="didnt-pick" key={order.id}>
                    <div className="order-header">
                        <h2>Order name: {order.orderName}</h2>
                        <div>
                            <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Your SVG content */}
                            </svg>
                        </div>
                    </div>
                    <p>Restaurant name: {order.res_name}</p>
                    <p>Pick up location: {order.place}</p>
                </div>
            ))}
        </div>
    );
}