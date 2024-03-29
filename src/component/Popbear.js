import React, {useEffect, useState} from "react";
import "../styles/Popbear.css";



export default function Popbear({picker,name,Id,comment,closePopupBear},order) {
    // console.log(order)
    function isGrabTrue() {
        const requestOptions = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'accept': '*',
            },
            body: JSON.stringify({
              "_id": {},
              "orderName": "string",
              "res_name": "string",
              "place": "string",
              "comment": "string",
              "isGrab": true,
              "items": [
                {
                  "dish": "string",
                  "quantity": 0
                }
              ]
            })
          };
          
          fetch(`https://localhost:5001/api/isGrabTrue/${Id}`, requestOptions)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
              // console.log(data.isGrab)
              window.location.href = "http://localhost:3000";
            })
            .catch((error) => {
              // console.error('Error fetching data:', error);
            });
      }


      function isGrabFalse() {
        const requestOptions = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'accept': '*',
            },
            body: JSON.stringify({
              "_id": {},
              "orderName": "string",
              "res_name": "string",
              "place": "string",
              "comment": "string",
              "isGrab": true,
              "items": [
                {
                  "dish": "string",
                  "quantity": 0
                }
              ]
            })
          };
          
          fetch(`https://localhost:5001/api/isGrabFalse/${Id}`, requestOptions)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
                // console.log(data.isGrab)
                window.location.href = "http://localhost:3000";
              })
            .catch((error) => {
              // console.error('Error fetching data:', error);
            });
      }
    return (
        <div>
            <div className="popbear">
            <img src="https://cdn.pic.in.th/file/picinth/bear.png" alt="popbear" className="bearImg"/>
                <div className="popbear-show">
                        <button className="bear-close"  onClick={closePopupBear}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none">
                            <path d="M2.05096 11.949C1.38239 11.3033 0.849111 10.5309 0.482248 9.67684C0.115385 8.82281 -0.0777186 7.90427 -0.0857953 6.97481C-0.093872 6.04536 0.0832399 5.1236 0.435206 4.26333C0.787172 3.40305 1.30694 2.62149 1.96419 1.96424C2.62144 1.30699 3.40301 0.787218 4.26328 0.435252C5.12355 0.0832857 6.04531 -0.0938262 6.97477 -0.0857495C7.90422 -0.0776728 8.82276 0.115431 9.67679 0.482294C10.5308 0.849157 11.3032 1.38243 11.949 2.051C13.2241 3.37122 13.9296 5.13943 13.9137 6.97481C13.8977 8.81019 13.1615 10.5659 11.8637 11.8637C10.5658 13.1616 8.81014 13.8978 6.97477 13.9137C5.13939 13.9297 3.37117 13.2241 2.05096 11.949ZM3.03796 10.962C4.08875 12.0128 5.51392 12.6031 6.99996 12.6031C8.486 12.6031 9.91117 12.0128 10.962 10.962C12.0127 9.91122 12.6031 8.48604 12.6031 7C12.6031 5.51397 12.0127 4.08879 10.962 3.038C9.91117 1.98722 8.486 1.39689 6.99996 1.39689C5.51392 1.39689 4.08875 1.98722 3.03796 3.038C1.98717 4.08879 1.39684 5.51397 1.39684 7C1.39684 8.48604 1.98717 9.91122 3.03796 10.962ZM9.96796 5.019L7.98696 7L9.96796 8.981L8.98096 9.968L6.99996 7.987L5.01896 9.968L4.03196 8.981L6.01296 7L4.03196 5.019L5.01896 4.032L6.99996 6.013L8.98096 4.032L9.96796 5.019Z" fill="#445D48"/>
                            </svg>
                        </button>
                    <div className="popbear-title">
                        <p>Order :</p>
                        <p>{name}</p>
                    </div>

                    <div className="popbear-name">
                        <p>Picker Name : {picker}</p>
                    </div>


                    <div className="popbear-comment">
                        <p>comment :</p>
                        <p className="bear-com">{comment}</p>
                    </div>

                    <div className="pop-btn">
                        <input type="submit" value="Done" className="bear-done" onClick={isGrabTrue} />
                        <input type="submit" value="Cancel" className="bear-cancel" onClick={isGrabFalse}/>
                    </div>
                    
                </div>


                
            </div>
        </div>
    );
}