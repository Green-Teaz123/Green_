import React, { useEffect, useState } from "react";
import { useNavigate  , Link } from "react-router-dom";
import "../styles/Order.css";

export default function Order() {
    const [orders, setOrders] = useState([]);
    const [orderName, setOrderName] = useState("");
    const [res_name, setRes_name] = useState("");
    const [place, setPlace] = useState("");

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
                setOrderName(data[1].orderName);
                setRes_name(data[1].res_name);
                setPlace(data[1].place);

            })
            .catch(error => {
                // Handle any errors from the API request
                console.error("Error fetching orders:", error);
            });
    }, []);

    const navigate  = useNavigate();
    const to_the_next_package = () => {
        navigate("/orderInfo",{
            state: {
                orderName: orderName, 
                res_name: res_name,
                place: place,
        }});
    }
    return (
            <div className="order" onClick={to_the_next_package}>
                {orders.map(order => (               
                    <div className="didnt-pick" key={order.id} >
                        <div className="order-header" >
                            <h2 onClick={()=>console.log(orderName)}>Order name: {order.orderName}</h2>
                            <div >
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