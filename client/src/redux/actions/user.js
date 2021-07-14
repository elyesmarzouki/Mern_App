import axios from "axios"
import { FAIL_USER, LOAD_USER, LOGIN_USER, SIGNUP_USER, LOGOUT_USER, CURRENT_USER, DELETE_USER } from "../constants/user";

export const signup=(user, history)=>async(dispatch)=>{
    dispatch({type: LOAD_USER});
    try {
        let result = await axios.post("/api/user/signup",user);
        dispatch({type: SIGNUP_USER, payload:result.data});
        history.push("/home");
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response.data});
    }
};

export const login=(user, history)=>async(dispatch)=>{
    dispatch({type: LOAD_USER});
    try {
        let result = await axios.post("/api/user/login",user);
        dispatch({type: LOGIN_USER, payload:result.data});
        history.push("/home");
    } catch (error) {
        dispatch({type: FAIL_USER, payload: error.response.data });
    }
};

export const logout=()=>{
    return {type: LOGOUT_USER};
};

export const current=()=>async(dispatch)=>{
    try {
        const config ={
            headers:{ authorization: localStorage.getItem("token")},
        };  
        let result = await axios.get("/api/user/current", config);
        dispatch({type:CURRENT_USER, payload: result.data})
    } catch (error) {
        dispatch({type:FAIL_USER, payload:error.response.data})
    }
};

export const deleteuser=()=>async(dispatch)=>{
    try {
        const config ={
            headers:{ authorization: localStorage.getItem("token")},
        };  
        let current = await axios.get("/api/user/current",config)
        console.log(current)
        let result = await axios.delete(`/api/user/${current.data.user._id}`)
        dispatch({type:DELETE_USER, payload: result.data})
    } catch (error) {
        dispatch({type:FAIL_USER, payload:error.response.data})
    }
};