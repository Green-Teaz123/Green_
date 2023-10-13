import React from "react";
import "../styles/Popbear.css";



export default function Popbear() {
    return (
        <div>
            <div className="popbear">
            <img src="https://cdn.pic.in.th/file/picinth/bear.png" alt="popbear" className="bearImg"/>
                <div className="popbear-show">
                    <div className="popbear-title">
                        <p>Order :</p>
                        <p>xxx xxxxxx</p>
                    </div>

                    <div className="popbear-name">
                        <p>Picker Name :</p>
                        <p>xxx xxxxxx</p>
                    </div>


                    <div className="popbear-comment">
                        <p>comment :</p>
                        <p className="bear-com">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae.</p>
                    </div>


                    
                    <div className="pop-btn">
                        <input type="submit" value="Done" className="bear-done" />
                        <input type="submit" value="Cancel" className="bear-cancel" />
                    </div>
                    
                </div>


                
            </div>
        </div>
    );
}