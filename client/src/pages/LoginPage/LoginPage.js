import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FormToLogin from "../../components/FormToLogin/FormToLogin";
import Footer from "../../components/Footer/Footer";

const LoginPage = () =>{
    return(
        <div>
            <Navbar/>
            <FormToLogin/>
            <Footer/>
        </div>
    )
};

export default LoginPage;