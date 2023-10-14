import React from "react";
import { useState } from "react";
import "../styles/Popup.css";


export default function Popup({ closePopup, orderName, comment, OrderId}, props ) {
    const [deliveryName, setDeliveryName] = useState("");
    const [deliveryComment, setDeliveryComment] = useState("");

    const checkInput = () => {
        if (deliveryName !== "" && deliveryComment !== "") {
            document.querySelector(".popup-footer input").disabled = false;
        } else {
            document.querySelector(".popup-footer input").disabled = true;
        }
    };

    const handleDeliveryANDcomment= (e) => {
        setDeliveryName(e.target.value);
        setDeliveryComment(e.target.value);
        checkInput();
    }

    // const to_the_next_package = () => {
    //     closePopup();
    //     <Popbear name={orderName} s_comment={comment} Id={OrderId}/>
    // }

    return (
        <div className="popup">
            <div className="popup-header">
                <div className="popup-title">
                    <p>Order : {orderName}</p>
                    {/* <p>{orderName}</p> */}
                </div>
                <div> 
                    <button className="button-cancle" onClick={closePopup}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none">
                            <path d="M2.05096 11.949C1.38239 11.3033 0.849111 10.5309 0.482248 9.67684C0.115385 8.82281 -0.0777186 7.90427 -0.0857953 6.97481C-0.093872 6.04536 0.0832399 5.1236 0.435206 4.26333C0.787172 3.40305 1.30694 2.62149 1.96419 1.96424C2.62144 1.30699 3.40301 0.787218 4.26328 0.435252C5.12355 0.0832857 6.04531 -0.0938262 6.97477 -0.0857495C7.90422 -0.0776728 8.82276 0.115431 9.67679 0.482294C10.5308 0.849157 11.3032 1.38243 11.949 2.051C13.2241 3.37122 13.9296 5.13943 13.9137 6.97481C13.8977 8.81019 13.1615 10.5659 11.8637 11.8637C10.5658 13.1616 8.81014 13.8978 6.97477 13.9137C5.13939 13.9297 3.37117 13.2241 2.05096 11.949ZM3.03796 10.962C4.08875 12.0128 5.51392 12.6031 6.99996 12.6031C8.486 12.6031 9.91117 12.0128 10.962 10.962C12.0127 9.91122 12.6031 8.48604 12.6031 7C12.6031 5.51397 12.0127 4.08879 10.962 3.038C9.91117 1.98722 8.486 1.39689 6.99996 1.39689C5.51392 1.39689 4.08875 1.98722 3.03796 3.038C1.98717 4.08879 1.39684 5.51397 1.39684 7C1.39684 8.48604 1.98717 9.91122 3.03796 10.962ZM9.96796 5.019L7.98696 7L9.96796 8.981L8.98096 9.968L6.99996 7.987L5.01896 9.968L4.03196 8.981L6.01296 7L4.03196 5.019L5.01896 4.032L6.99996 6.013L8.98096 4.032L9.96796 5.019Z" fill="#445D48"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="popup-inner">
                    <label>Delivery Name</label>
                    <input type="text"  className="deliveryName" onChange={ ()=>handleDeliveryANDcomment} />
                    <label>comment</label>
                    <textarea className="deliveryComment" onChange={()=>handleDeliveryANDcomment} />
                <div className="popup-footer">
                    <input type="submit" value="Pick it" onClick={closePopup} />
                </div>
            </div>
        </div>
    );
}