import React,{ useState } from "react";
import { useSelector } from "react-redux";
import Application from "../Application/Application";
import AddApplication from "../AddApplication/AddApplication";

function ApplicationList(){
    const listOfApplication =useSelector((state)=> state.applicationReducer.applications);
    const [status,setStatus] = useState("all");
    return(
        <div id="list">
            <AddApplication/>
            <div id="all">
                    <div id="filfil">
                        <div id="btnsbox">
                            <div><button className="samewidth" onClick={()=>{setStatus("tunisia")}}>Show only applications in Tunisia</button></div>
                            <div><button className="samewidth" onClick={()=>{setStatus("outsidetunisia")}}>Show only applications outside Tunisia</button></div>
                            <div><button id="toremovef" onClick={()=>{setStatus("all")}}>Remove all filters</button></div>
                        </div>
                    </div>
                    <div id="thelist">
                        {status === "tunisia" ? 
                        listOfApplication.filter((element) => element.country === "Tunisia")
                        .map((element,index) => <Application application={element} key={index}/>)
                        : status === "outsidetunisia"? 
                        listOfApplication.filter((element) => element.country !== "Tunisia" )
                        .map((element,index) => <Application application={element} key={index}/>)
                        :
                        listOfApplication.map((element,index) => <Application application={element} key={index}/>)}
                    </div>
            </div>
        </div>

    )
};

export default ApplicationList;