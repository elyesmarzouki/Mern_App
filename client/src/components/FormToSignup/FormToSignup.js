import React,{useState} from "react";
import {useDispatch} from "react-redux"
import "./FormToSignup.css";
import myLogo from "../../assests/logo.jpg";
import {signup} from "../../redux/actions/user";
import { useHistory } from "react-router-dom";
import UserErrors from "../errors/UserErrors";


function FormToSignup(){
    const [user,setUser]=useState({});
    
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    const dispatch = useDispatch();

    const history = useHistory();

    const handleSignup=(e)=>{
        e.preventDefault();
        dispatch(signup(user,history))
    };

    return(
        <div id="container">
            <div id="box1">
                <img id="photo" src={myLogo} alt="logo"/>
                <h1 id="toJ">Join us!</h1>
                <p id="under">Looking for a job?<br></br>Discover the latest offers from the companies we work with around the world.<br></br>Many of the opportunities are exclusive to Good Job.<br></br>Good Job is 100% free for job seekers.</p>
            </div>
            <div id="box2">
            <div>
                <h1 className="tete">Create an account</h1>
                <h3 className="tetee">It's quick and easy!</h3>
                <hr></hr>
                <UserErrors/>
            </div>
            <div>
                <div id="name">
                    <input id="first" onChange={handleChange} name="firstname" type="text" placeholder="first name..."/>
                    <input id="last" onChange={handleChange} name="lastname" type="text" placeholder="last name..."/>
                </div>
                <div id="data">
                    <input className="email" onChange={handleChange} name="email" type="text" placeholder="email..."/>
                    <input className="email" onChange={handleChange} name="password" type="password" placeholder="password..."/>
                    <input className="email" onChange={handleChange} name="phone" type="text" placeholder="phone number..."/>
                    <input className="email" onChange={handleChange} name="country" type="text" placeholder="country..."/>
                    <input className="email" onChange={handleChange} name="dateofbirth" type="date"/>
                </div>
                <div>
                    <button id="toS" onClick={handleSignup}>Sign up</button>
                </div>
            </div>
            </div>
        </div>
    )
};

export default FormToSignup;