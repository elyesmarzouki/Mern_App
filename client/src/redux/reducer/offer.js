import {LOAD_OFFERS, GET_OFFERS, FAIL_OFFERS, ADD_OFFER} from "../constants/offer"

const initialState={
    offer:{},
    offers:[],
    errors:null,
    load:false
};

const offerReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOAD_OFFERS: return {...state, load: true};
        case ADD_OFFER: return {...state, load:false, offer:payload.newOffer}
        case FAIL_OFFERS: return {...state, errors:payload, load:false};
        case GET_OFFERS: return {...state, offers:payload.offers, load:false};
        default:
            return state;
    }
}

export default offerReducer