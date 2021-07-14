import React from "react";
import "./Footer.css";
import iconFacebook from "../../assests/facebook.png";
import iconInstagram from "../../assests/instagram.png";
import iconTweeter from "../../assests/tweeter.png";

function Footer(){

    const iconStyle={height:30, width:30, margin:5}
    return(
        <div id="footer">
            <div id="cont1">
                <div>
                    <h1 id="toFO">Follow us :</h1>
                </div>
                <div>
                    <a href="https://www.facebook.com/Good-Job-109852557999314"><img className="opacity" src={iconFacebook} alt="icon" style={iconStyle}/></a>
                    <a href="https://www.instagram.com/"><img className="opacity" src={iconInstagram} alt="icon" style={iconStyle}/></a>
                    <a href="https://twitter.com/?lang=fr"><img className="opacity" src={iconTweeter} alt="icon" style={iconStyle}/></a>
                </div>
            </div>
            <div id="cont2">
                <div>
                    <h1 id="toFO">Contact us:</h1>
                </div>
                <div>
                    <p className="datas">Phone number: +216 29 141 795</p>
                    <p className="datas">Address email: marzouki_elyes@yahoo.com</p>
                </div>
            </div>
        </div>     
)
};

export default Footer;