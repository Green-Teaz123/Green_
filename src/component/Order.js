import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Order.css";

export default function Order() {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        // Make an API request when the component mounts
        fetch("https://localhost:5001/api/getOrders")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setOrders(data);

                // console.log(data);

            })
            .catch(error => {
                console.error("Error fetching orders:", error);
            });
    }, []);
    const navigate  = useNavigate();
    const to_the_next_package = (id, orderName, res_name, place, comment) => {
        console.log(orderName, res_name, place);
        navigate("/orderInfo",{
            state: {
                id,
                orderName, 
                res_name,
                place,
                comment
        }});
        
    }
    return (
            <div className="order-box"  >
                {orders.map(order => (               
                    <div className="didnt-pick" key={order.id} onClick={()=> to_the_next_package(order.id ,order.orderName, order.res_name, order.place, order.comment)}  >
                        <div className="order-header" >
                            <h2 >Order name: {order.orderName}</h2>
                            <div  >
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