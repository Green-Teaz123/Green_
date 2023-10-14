import React, {useEffect} from "react";
import "../styles/Popbear.css";



export default function Popbear(order) {
    var name = order.name
    var Id = order.Id;
    var comment = order.s_comment
    console.log(order)
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
          
          fetch(`https://localhost:7263/api/isGrabTrue/${Id}`, requestOptions)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
              console.log(data.isGrab)
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
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
          
          fetch(`https://localhost:7263/api/isGrabFalse/${Id}`, requestOptions)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
                console.log(data.isGrab)
              })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
      }
    return (
        <div>
            <div className="popbear">
            <img src="https://cdn.pic.in.th/file/picinth/bear.png" alt="popbear" className="bearImg"/>
                <div className="popbear-show">
                    <div className="popbear-title">
                        <p>Order :</p>
                        <p>{name}</p>
                    </div>

                    <div className="popbear-name">
                        <p>Picker Name :</p>
                        <p>xxx xxxxxx</p>
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