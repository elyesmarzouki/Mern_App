import React from "react";
import myLogo2 from "../../assests/logov2.jpg";
import "./Navbar.css";
import {NavLink} from "react-router-dom"

function Navbar(){
    const styleLogo={height:50,borderRadius:5,margin:5,marginLeft:45}
    return(
        <div id="navbar">
            <div id="left">
                <NavLink className="NavLink" to="/"><img src={myLogo2} alt="logo" style={styleLogo} id="ho"/></NavLink>
            </div>
            <div id="right">
            <div><h3 className="twobuttons"><NavLink className="navlinks" to="/home">Home</NavLink></h3></div>
                <div><h3 className="twobuttons"><NavLink className="navlinks" to="/login">Log in</NavLink></h3></div>
                <div><h3 className="twobuttons"><NavLink className="navlinks" to="/signup">Sign up</NavLink></h3></div>
            </div>
        </div>
    )
};

export default Navbar;