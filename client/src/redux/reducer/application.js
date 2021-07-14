import {LOAD_APPLICATIONS, GET_APPLICATIONS, FAIL_APPLICATIONS, ADD_APPLICATION} from "../constants/application"

const initialState={
    application:{},
    applications:[],
    errors:{},
    load:false
};

const applicationReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOAD_APPLICATIONS: return {...state, load: true};
        case ADD_APPLICATION: return {...state, load:false, application:payload.newApplication}
        case FAIL_APPLICATIONS: return {...state, errors:payload, load:false};
        case GET_APPLICATIONS: return {...state, applications:payload.applications, load:false};
        default:
            return state;
    }
}

export default applicationReducer