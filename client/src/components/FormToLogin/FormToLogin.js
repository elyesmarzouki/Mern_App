import React, { useState } from "react";
import "./FormToLogin.css";
import myLogo from "../../assests/logo.jpg"
import { useDispatch } from "react-redux";
import {login} from "../../redux/actions/user"
import { useHistory } from "react-router-dom";
import UserErrors from "../errors/UserErrors";

function FormToLogin(){
    const [user, setUser]=useState({})

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const dispatch= useDispatch()

    const history = useHistory();

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(login(user, history))
    }
    return(
        <div id="container" className="for">
            <div id="box1">
                <img id="foto" src={myLogo} alt="logo"/>
                <h1 id="toJ">Welcome!</h1>
            </div>
            <div id="box2">
            <div>
                <h1 className="tete">Log in</h1>
                <hr></hr>
                <UserErrors/>
            </div>
                <div id="data">
                    <form>
                        <h4 id="emM">Address email:</h4>
                        <input className="email" name="email" onChange={handleChange} type="text" placeholder="enter your email..."/>
                    </form>
                    <form>
                        <h4>Password:</h4>
                        <input id="passM" className="email" onChange={handleChange} name="password" type="password" placeholder="enter your password..."/>
                    </form>
                </div>
                    <button id="toS" className="bbttnn" onClick={handleLogin}>Log in</button>
            </div>
        </div>
    )
};

export default FormToLogin;