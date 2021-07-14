import React from "react";
import { useSelector } from "react-redux";
import UserError from "../UserError/UserError";

function UserErrors(){
    const errors = useSelector(state => state.userReducer.errors.errors)
    return(
        <div>
            {errors.map((element,index)=><UserError error={element} key={index}/>)}
            <hr></hr>
        </div>
    )
}

export default UserErrors;