import React from "react";
import myBack from "../../assests/home.jpg";

const HomeP=()=>{
    const styleBack={width:1263,height:650}
    return(
        <div>
            <img src={myBack} alt="background" style={styleBack}/>
        </div>
    )
}

export default HomeP;