import React from "react";
import "./Errors.css";
import myPage from "../../assests/pagenotfound.jpg"

const Errors = () =>{
    return(
        <div id="main">
            <img src={myPage} alt="404" id="notf"/>
        </div>
    )
}
;
export default  Errors;