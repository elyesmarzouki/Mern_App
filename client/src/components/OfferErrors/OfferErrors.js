import React from 'react';
import { useSelector } from "react-redux";
import OfferError from "../OfferError/OfferError";

const OfferErrors = () => {
    const errors = useSelector(state => state.offerReducer.errors.errors)
    return (
        <div>
            {errors.map((element,index)=><OfferError error={element} key={index}/>)}
            <hr></hr>
        </div>
    )
}

export default OfferErrors
