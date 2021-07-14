import React from "react";
import { useDispatch, useSelector } from "react-redux";
import myName from "../../assests/name.png";
import { deleteuser } from "../../redux/actions/user";
import "./ProfilData.css";
import { useHistory } from "react-router-dom";

const ProfilData =()=>{
    const user =useSelector((state)=> state.userReducer.user)
    const country=useSelector((state)=> state.userReducer.user.country)
    const birthday=useSelector((state)=> state.userReducer.user.dateofbirth)
    const styleData={width:100,height:100};
    const dispatch = useDispatch();
    const history = useHistory();
    const handleDelete=()=>{
        dispatch(deleteuser());
        history.push("/login")
    }
    return(
        <div id="profil">
            <div id="marj">
            <div className="dds" id="aads">
                <img src={myName} alt="icon" style={styleData}/>
                <h1 id="aaa">{user.firstname+ " " +user.lastname}</h1>
            </div>
            <div className="dds" id="bas">
                <h4 className="eeeeds">Address email:</h4>
                <h4 className="ddd">{user.email}</h4>
            </div>
            <div className="dds">
                <h4 className="eeeeds">Phone number:</h4>
                <h4 className="ddd">{user.phone}</h4>
            </div>
            <div className="dds">
                <h4 className="eeeeds">Country:</h4>
                <h4 className="ddd" id="coco">{country?user.country:<p className="empty">Empty</p>}</h4>
            </div>
            <div className="dds">
                <h4 className="eeeeds">Birthday:</h4>
                <h4 className="ddd">{birthday?birthday:<p className="empty">Empty</p>}</h4>
            </div>
            <p id="btnds" onClick={handleDelete}>Delete user</p>
            </div>
        </div>
    );
};

export default ProfilData;