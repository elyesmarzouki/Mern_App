import {LOAD_APPLICATIONS, GET_APPLICATIONS, FAIL_APPLICATIONS} from "../constants/application";
import axios from "axios";

export const getallapplications =()=>async(dispatch)=>{
    dispatch({type: LOAD_APPLICATIONS});
    try {
        let allapplications =await axios.get("/api/application/allapplications");
        dispatch({type: GET_APPLICATIONS, payload:allapplications.data});
    } catch (error) {
        dispatch({type: FAIL_APPLICATIONS, payload:error.response.data});
    }
};

export const addapplication =(newApplication)=>async(dispatch)=>{
    dispatch({type: LOAD_APPLICATIONS});
    try {
        await axios.post("/api/application/addapplication",newApplication);
        dispatch(getallapplications())
    } catch (error) {
        dispatch({type: FAIL_APPLICATIONS, payload:error.response.data});
    }
};

export const deleteapplication=(application)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/application/${application._id}`)
        dispatch(getallapplications())
    } catch (error) {
        dispatch({type: FAIL_APPLICATIONS, payload:error.response.data})
    }
};

export const editapplication=(application, id)=>async(dispatch)=>{
    try {
        await axios.put(`/api/application/${id}`,application)
        dispatch(getallapplications())
    } catch (error) {
        dispatch({type:FAIL_APPLICATIONS, payload:error.response.data})
    }
}