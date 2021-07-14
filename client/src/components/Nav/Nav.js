import React from "react";
import "./Nav.css";
import myLogo from "../../assests/logo.jpg";
import { NavLink } from "react-router-dom";
import { current, logout } from "../../redux/actions/user";
import {useDispatch} from "react-redux"
import { getalloffers } from "../../redux/actions/offer";
import { getallapplications } from "../../redux/actions/application";

function Nav(){
    const dispatch = useDispatch();
    const handleLogout=()=>{
        dispatch(logout())
    }
    const styleLogo={height:50,borderRadius:5,margin:5,marginLeft:45}

    const handleProfil=()=>{
        dispatch(current())
    }
    const handleGetO=()=>{
        dispatch(getalloffers())
    }
    const handleGetA=()=>{
        dispatch(getallapplications())
    }
    return(
        <div id="navbar">
            <div id="left">
                <NavLink to="/home"><img src={myLogo} alt="logo" style={styleLogo} id="ho"/></NavLink>
            </div>
            <div id="right">
                <div><h3 className="twobuttons" onClick={handleGetO}><NavLink to="/offers" className="navlinks">Offers</NavLink></h3></div>
                <div><h3 className="twobuttons" onClick={handleGetA}><NavLink to="/applications" className="navlinks">Applications</NavLink></h3></div>
                <div><h3 className="twobuttons" onClick={handleProfil}><NavLink to="/profil" className="navlinks">Profil</NavLink></h3></div>
                <div><h3 className="twobuttons" onClick={handleLogout}><NavLink to="/" className="navlinks">Log out</NavLink></h3></div>
            </div>
        </div>
    )
};

export default Nav;