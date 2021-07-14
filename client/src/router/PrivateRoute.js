import React from "react";
import { Route, Redirect} from "react-router"

const PrivateRoute=({component:Component})=>{
    const token = localStorage.getItem("token")
    if(token){
        return <Route component={Component}/>
    }
    else{
        alert("You have to identify yourself !")
        return <Redirect to="/login" />
    }
};

export default PrivateRoute;

