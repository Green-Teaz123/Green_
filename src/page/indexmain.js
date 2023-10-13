import React from "react";
import OrderStyle from "../component/orderStyle";
import Order from "../component/Order";
import OrderStyleDk from "../component/orderStyleDk";
import "../styles/main.css";

export default function King_louy() {
    const to_the_next_package = () => {
        window.location.href = "http://localhost:3000/create";
    }
    return (
        <div>
            <div className="create-order-dk">
                <input type="submit" value="Create your meal +" className="only-indexmain-input" onClick={to_the_next_package} />
                
            </div>

            <div className="create-order-btn">
                
                <button class="btn" onClick={to_the_next_package}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
                        <path d="M7.55556 13.2222H9.44444V9.44444H13.2222V7.55556H9.44444V3.77778H7.55556V7.55556H3.77778V9.44444H7.55556V13.2222ZM1.88889 17C1.36945 17 0.924612 16.8149 0.55439 16.4447C0.184168 16.0744 -0.000628026 15.6299 1.60347e-06 15.1111V1.88889C1.60347e-06 1.36945 0.185113 0.924612 0.555335 0.55439C0.925557 0.184168 1.37008 -0.000628026 1.88889 1.60347e-06H15.1111C15.6306 1.60347e-06 16.0754 0.185113 16.4456 0.555335C16.8158 0.925557 17.0006 1.37008 17 1.88889V15.1111C17 15.6306 16.8149 16.0754 16.4447 16.4456C16.0744 16.8158 15.6299 17.0006 15.1111 17H1.88889Z" fill="#445D48"/>
                    </svg>
                </button>
            </div>
            
            <div>
                <OrderStyleDk/>
            </div>
            

            {/* created order status didn't pick */}
            <div>
                <Order />
            </div>

            {/* created order status picked */}
            


        </div>

    );
}
