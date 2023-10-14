import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Order.css";

export default function Order() {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch("https://localhost:5001/api/getOrders")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setOrders(data);

            })
            .catch(error => {
                console.error("Error fetching orders:", error);
            });
    }, []);
    const navigate  = useNavigate();
    const to_the_next_package = (id, orderName, res_name, isgrab, place, comment) => {
        console.log(orderName, res_name, place, isgrab);
        navigate("/orderInfo", {
            state: {
                id,
                orderName,
                res_name,
                place,
                isgrab,
                comment
            }
        });
    }    
    return (
            <div className="order-box"  >
                {orders.map(order => (               
                    <div className="didnt-pick" key={order.id} onClick={()=> to_the_next_package(order.id, order.orderName, order.res_name, order.isgrab, order.place, order.comment)                    }  >
                        {console.log(order.isgrab)}
                        <div className="order-header" >
                            <h2 >Order name: {order.orderName}</h2>

                            <div  >
                            </div>
                        </div>
                        <div className="res-lo-header"> <p className="res-lo-header">Restaurant name: </p> <p className="gray-scale">{order.res_name}</p> </div>
                        <div className="res-lo-header"> <p className="res-lo-header">Pick up location: </p> <p className="gray-scale">{order.place}</p> </div>
                        <div className="res-lo-header">
                            <p className="res-lo-header">STATUS:  </p>
                            <p className={order.isgrab ? "green-text" : "red-text"}>
                                {order.isgrab ? "GRABBED" : "NOT GRABBED"}
                            </p>
                            </div>
                    </div>
                ))}
            </div>
    );
}