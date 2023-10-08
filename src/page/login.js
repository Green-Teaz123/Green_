import React from "react";
import "../styles/login.css";
import InputAndLabel from "../component/input-and-label";
import HugeDot from "../component/huge";

export default function Login() {
    const elementToDisableScroll = document.querySelector('body');
    elementToDisableScroll.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    const handleSwap = () => {
        const bigBox = document.querySelector(".big-box");
        const bigBlackBox = document.querySelector(".big-black-box");
        const body = document.querySelector("body");
        const logoName = document.querySelector(".logo-name");
        const huge = document.querySelector(".huge-dot");

        if (bigBox.style.display === "none"){
                body.style.backgroundColor = "#AAC8A7";
                bigBox.style.display = "block";
                bigBlackBox.style.display = "none";
                logoName.style.color = "#445D48";
                huge.style.backgroundColor = "#445D48";
                huge.style.marginTop = "100px";

            }   
        else if (bigBlackBox.computedStyleMap().get("display").value === 'none'){
                body.style.backgroundColor = "#445D48";
                bigBlackBox.style.display = "block";
                bigBox.style.display = "none";
                logoName.style.color = "#AAC8A7";
                huge.style.backgroundColor = "#AAC8A7";
                huge.style.marginTop = "0px";
            };

        }

    return (
        <div>
            <div className="login-form">
                <div class='logo-name'>
                    <h1>SU</h1>
                    <h2>PERFECT MEAL</h2>
                </div>
            </div>
            <div className="big-box">
                <div className="box-login">
                    <div className="login">
                        <div className="headline">
                            <p className="line"></p>
                            <p className="log">LOGIN</p>
                            <p className="line"></p>
                        </div>
                        <form className="form-input">
                            <InputAndLabel type="text" name="username" label="Username" />
                            <InputAndLabel type="password" name="password" label="Password" />
                            <div className="remember-me">
                                <input type="checkbox" name="check-rememberme"/>
                                <a for="check-rememberme">Remember me</a>  
                            </div>
                            
                            <input type="submit" className="submitbtn" value="Login" />
                            <a className="swap-to-register" onClick={handleSwap}> Create New Account ?</a>

                        </form>
                    </div>
                </div>
            </div>

            <div className="big-black-box">
                <div className="box-login">
                    <div className="login">
                        <div className="headline">
                            <p className="line"></p>
                            <p className="log">Register</p>
                            <p className="line"></p>
                        </div>
                    </div>
                    <form className="form-input">
                        <InputAndLabel type="text" name="username" label="Username" />
                        <InputAndLabel type="Email" name="Email" label="Email" />
                        <InputAndLabel type="password" name="password" label="Password" />
                        <InputAndLabel type="password" name="password" label="Confirm Password" />
                        <input type="submit" className="submitbtn" value="Register" />
                    </form>
                    <div className="remember-me">
                        <input type="checkbox" name="check-rememberme"/>
                        <a for="check-rememberme">Create your account and your accepting</a>  
                    </div>
                    <a className="swap-to-register" onClick={handleSwap} > Back to Login </a>
                </div>
            </div>
            <footer> 
                <HugeDot />
            </footer>
        </div>
        
    );
}