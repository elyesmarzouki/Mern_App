import {LOAD_OFFERS, GET_OFFERS, FAIL_OFFERS} from "../constants/offer";
import axios from "axios";

export const getalloffers =()=>async(dispatch)=>{
    dispatch({type: LOAD_OFFERS});
    try {
        let alloffers =await axios.get("/api/offer/alloffers");
        dispatch({type: GET_OFFERS, payload:alloffers.data});
    } catch (error) {
        dispatch({type: FAIL_OFFERS, payload:error.response.data});
    }
};

export const addoffer =(newOffer)=>async(dispatch)=>{
    dispatch({type: LOAD_OFFERS});
    try {
        await axios.post("/api/offer/addoffer",newOffer);
        dispatch(getalloffers())
    } catch (error) {
        dispatch({type: FAIL_OFFERS, payload:error.response.data});
    }
};

export const deleteoffer=(offer)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/offer/${offer._id}`)
        dispatch(getalloffers())
    } catch (error) {
        dispatch({type:FAIL_OFFERS, payload:error.response.data})
    }
};

export const editoffer=(offer, id)=>async(dispatch)=>{
    try {
        await axios.put(`/api/offer/${id}`,offer)
        dispatch(getalloffers())
    } catch (error) {
        dispatch({type:FAIL_OFFERS, payload:error.response.data})
    }
}