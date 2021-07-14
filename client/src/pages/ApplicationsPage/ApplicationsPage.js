import React,{ useEffect } from"react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import ApplicationList from "../../components/ApplicationList/ApplicationList";
import { useDispatch } from "react-redux";
import { getallapplications } from "../../redux/actions/application";

const ApplicationsPage=()=>{
    const dispatch= useDispatch()
    useEffect(()=>{
    dispatch(getallapplications())
})
    return(
        <div>
            <Nav/>
            <ApplicationList/>
            <Footer/>
        </div>
    )
}

export default ApplicationsPage