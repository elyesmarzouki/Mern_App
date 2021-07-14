import {combineReducers} from "redux";
import userReducer from "./user";
import applicationReducer from "./application";
import offerReducer from "./offer";

const rootReducer = combineReducers({userReducer,applicationReducer,offerReducer});

export default rootReducer;