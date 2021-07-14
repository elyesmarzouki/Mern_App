import { FAIL_USER, LOAD_USER, LOGIN_USER, SIGNUP_USER, LOGOUT_USER, CURRENT_USER, DELETE_USER } from "../constants/user";

const initialState={
    user:{},
    errors:{},
    isAuth:false,
    load:false
};

const userReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOAD_USER: return {...state, load: true};
        case SIGNUP_USER: localStorage.setItem("token", payload.token); return {...state, user: payload.user, load: false, isAuth:true};
        case LOGIN_USER: localStorage.setItem("token", payload.token); return {...state, user: payload.user, load: false, isAuth:true};
        case FAIL_USER: return {...state, errors:payload, load:false};
        case LOGOUT_USER: localStorage.removeItem("token"); return {...state, user:{}, load:false, isAuth:false};
        case CURRENT_USER: return {...state, user:payload.user, isAuth:true};
        case DELETE_USER: localStorage.removeItem("token"); return {...state, user:payload, isAuth:false}
        default:
            return state;
    }
}

export default userReducer;