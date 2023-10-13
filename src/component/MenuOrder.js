import React from "react";
import "../styles/MenuOrder.css"

export default function MenuOrder(props) {
    return (
        <div className="MenuOrder">
                    <p>{props.dish}</p>
                    <p>{props.quantity}</p>
                </div>

    );
}