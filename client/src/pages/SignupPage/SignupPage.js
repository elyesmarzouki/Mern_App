import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FormToSignup from "../../components/FormToSignup/FormToSignup";
import Footer from "../../components/Footer/Footer";

const SigninPage = () =>{
    return(
        <div>
            <Navbar/>
            <FormToSignup/>
            <Footer/>
        </div>
    )
};

export default  SigninPage;