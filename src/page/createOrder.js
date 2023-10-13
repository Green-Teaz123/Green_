import React,{useState} from "react";
import Dish from "../component/dishe";
import "../styles/createOrder.css";

export default function CreateOrder() {
    const [orderName, setOrderName] = useState("");
    const [res_name, setRes_name] = useState("");
    const [place, setPlace] = useState("");
    const [comment, setComment] = useState("");
    const [isGrab] = useState(true);
    const [items ,setItems] = useState([]);

    const to_the_next_package = () => {
        window.location.href = "http://localhost:3000/";
    }

    const handleAdd = () => {

        const dishName = document.querySelector('.dishe-name').value;
        const quantity = document.querySelector('.quantity').value;

        if (!dishName || !quantity || isNaN(quantity) || quantity <= 0) {
            alert("Please enter valid dish name and quantity.");
            return;
        }

        setItems((prevItems) => [
            ...prevItems,
            { dish: dishName, quantity: parseInt(quantity) }
        ]);

        // clear input
        document.querySelector('.dishe-name').value = "";
        document.querySelector('.quantity').value = "";  
        console.log('add dish success');
    }

    const handleSubmit = (e) => {
        if (!orderName || !res_name || !place || !comment || items.length === 0) {
            alert("Please fill in all fields.");
            return;
        }
        fetch('http://localhost:7263/api/create', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                orderName: orderName,
                res_name: res_name,
                place: place,
                comment: comment,
                isGrab: isGrab,
                items: items
            })
        }).then((e) =>
        console.log(e),
        console.log('add order success'))}
        console.log(items);

    return (
        <div>
            <div className="create-order">
                <div className="header-create-order">
                    <p>Create meal order</p>
                    <button className="btn" onClick={to_the_next_package}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none">
                            <path d="M2.05096 11.949C1.38239 11.3033 0.849111 10.5309 0.482248 9.67684C0.115385 8.82281 -0.0777186 7.90427 -0.0857953 6.97481C-0.093872 6.04536 0.0832399 5.1236 0.435206 4.26333C0.787172 3.40305 1.30694 2.62149 1.96419 1.96424C2.62144 1.30699 3.40301 0.787218 4.26328 0.435252C5.12355 0.0832857 6.04531 -0.0938262 6.97477 -0.0857495C7.90422 -0.0776728 8.82276 0.115431 9.67679 0.482294C10.5308 0.849157 11.3032 1.38243 11.949 2.051C13.2241 3.37122 13.9296 5.13943 13.9137 6.97481C13.8977 8.81019 13.1615 10.5659 11.8637 11.8637C10.5658 13.1616 8.81014 13.8978 6.97477 13.9137C5.13939 13.9297 3.37117 13.2241 2.05096 11.949ZM3.03796 10.962C4.08875 12.0128 5.51392 12.6031 6.99996 12.6031C8.486 12.6031 9.91117 12.0128 10.962 10.962C12.0127 9.91122 12.6031 8.48604 12.6031 7C12.6031 5.51397 12.0127 4.08879 10.962 3.038C9.91117 1.98722 8.486 1.39689 6.99996 1.39689C5.51392 1.39689 4.08875 1.98722 3.03796 3.038C1.98717 4.08879 1.39684 5.51397 1.39684 7C1.39684 8.48604 1.98717 9.91122 3.03796 10.962ZM9.96796 5.019L7.98696 7L9.96796 8.981L8.98096 9.968L6.99996 7.987L5.01896 9.968L4.03196 8.981L6.01296 7L4.03196 5.019L5.01896 4.032L6.99996 6.013L8.98096 4.032L9.96796 5.019Z" fill="#445D48"/>
                            </svg>
                    </button>
                </div>
                <div className="form-create-order">
                    <label className="textLabel" id="lbl1">Order name</label>
                    <input type="text" id="txtin1" className="textInput" value={orderName} onChange={(e) => setOrderName(e.target.value)}/>

                    <label className="textLabel" id="lbl2">Restaurant name</label>
                    <input type="text" id="txtin2" className="textInput" value={res_name} onChange={(e) => setRes_name(e.target.value)}/>

                    <label className="textLabel" id="lbl3">Pick up location</label>
                    <input type="text" id="txtin3" className="textInput" value={place} onChange={(e) => setPlace(e.target.value)}/>

                    <label className="textLabel" id="lbl4">Comment</label>
                    <textarea id="txtarea" value={comment} onChange={(e) => setComment(e.target.value)}/>

                    <label className="textLabel" id="lbl5">Order</label>
                    <div className="add-order">
                       
                        <div className="add-order-header">
                            <p id="p1">Dishes</p>
                            <p id="p2">Quantity</p>
                        </div>
                        <div className="order-success-add">
                            {items.map((item, index) => (
                            <Dish key={index} dish={item.dish} quantity={item.quantity} />
                            ))}
                        </div>

                    <div className="vl"></div>

                    </div>
                    <div className="gen-dishes">
                            <input type="text" placeholder="Enter you order" className="dishe-name"/>
                            <input type="text" placeholder="unit" className="quantity"/>
                            
                            <button className="btn-add" onClick={handleAdd}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 17 17" fill="none">
                                    <path d="M7.55556 13.2222H9.44444V9.44444H13.2222V7.55556H9.44444V3.77778H7.55556V7.55556H3.77778V9.44444H7.55556V13.2222ZM1.88889 17C1.36945 17 0.924612 16.8149 0.55439 16.4447C0.184168 16.0744 -0.000628026 15.6299 1.60347e-06 15.1111V1.88889C1.60347e-06 1.36945 0.185113 0.924612 0.555335 0.55439C0.925557 0.184168 1.37008 -0.000628026 1.88889 1.60347e-06H15.1111C15.6306 1.60347e-06 16.0754 0.185113 16.4456 0.555335C16.8158 0.925557 17.0006 1.37008 17 1.88889V15.1111C17 15.6306 16.8149 16.0754 16.4447 16.4456C16.0744 16.8158 15.6299 17.0006 15.1111 17H1.88889Z" fill="#445D48"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <input type="submit" value="Pick it up" className="created" onClick={handleSubmit} />
            </div>
        </div>
    );
}