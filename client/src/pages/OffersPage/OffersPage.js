import React,{ useEffect } from"react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import OfferList from "../../components/OfferList/OfferList";
import { useDispatch } from "react-redux";
import { getalloffers } from "../../redux/actions/offer";

const OffersPage=()=>{
    const dispatch= useDispatch()
    useEffect(()=>{
    dispatch(getalloffers())
})
    return(
        <div>
            <Nav/>
            <OfferList/>
            <Footer/>
        </div>
    )
}

export default OffersPage