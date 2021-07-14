import React,{ useState } from "react";
import { useSelector } from "react-redux";
import Offer from "../Offer/Offer";
import "./OfferList.css";
import AddOffer from "../AddOffer/AddOffer";

function OfferList(){
    const listOfOffer =useSelector((state)=> state.offerReducer.offers);
    const [status,setStatus] = useState("all");
    return(
        <div id="list">
            <AddOffer/>
            <div id="all">
                    <div id="filfil">
                        <div id="btnsbox">
                            <div><button className="samewidth" onClick={()=>{setStatus("tunisia")}}>Show only offers in Tunisia</button></div>
                            <div><button className="samewidth" onClick={()=>{setStatus("outsidetunisia")}}>Show only offers outside Tunisia</button></div>
                            <div><button id="toremovef" onClick={()=>{setStatus("all")}}>Remove all filters</button></div>
                        </div>
                    </div>
                    <div id="thelist">
                        {status === "tunisia" ? 
                        listOfOffer.filter((element) => element.country === "Tunisia")
                        .map((element,index) => <Offer offer={element} key={index}/>)
                        : status === "outsidetunisia"? 
                        listOfOffer.filter((element) => element.country !== "Tunisia" )
                        .map((element,index) => <Offer offer={element} key={index}/>)
                        :
                        listOfOffer.map((element,index) => <Offer offer={element} key={index}/>)}
                    </div>
            </div>
        </div>

    )
};

export default OfferList;