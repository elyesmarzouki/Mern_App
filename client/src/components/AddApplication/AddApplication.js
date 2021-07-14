import React from "react";
import { useState } from "react";
import {Modal} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { addapplication } from "../../redux/actions/application";
import "./AddApplication.css"

function AddApplication() {
    const id =useSelector((state)=> state.userReducer.user._id)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newApplication,setNewApplication] = useState();

    const handleChange=(e)=>{
        setNewApplication({...newApplication,[e.target.name]:e.target.value,userId:id})
    };

    const dispatch= useDispatch()
    const handleAdd=(e)=>{
        e.preventDefault();
        dispatch(addapplication(newApplication));
        handleClose();
    }
    return (
    <>
        <button id="likeo" onClick={handleShow}>
        Add an application
        </button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <h1 id="titit">Add an application</h1>
        </Modal.Header>
        <Modal.Body>
            <div className="mod">
                <div><p>Name:</p></div>
                <input className="modalinput" onChange={handleChange} name="name" placeholder="name..."/>
            </div>
            <div className="mod">
                <p>Post:</p>
                <input className="modalinput" onChange={handleChange} name="post" placeholder="post..."/>
            </div>
            <div className="mod">
                <p>Qualifications:</p>
                <input className="modalinputx" onChange={handleChange} name="qualifications" placeholder="qualifications..."/>
            </div>
            <div className="mod">
                <p>Country:</p>
                <input className="modalinput" onChange={handleChange} name="country" placeholder="country..."/>
            </div>
            <div className="mod">
                <p>Other skills:</p>
                <input className="modalinputx" onChange={handleChange} name="skills" placeholder="other skills..."/>
            </div>
            <div className="mod">
                <p>Phone number:</p>
                <input className="modalinput" onChange={handleChange} name="phonenumber" placeholder="phone number..."/>
            </div>
            <div className="mod">
                <p>Address email:</p>
                <input className="modalinput" onChange={handleChange} name="email" placeholder="address email..."/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <button id="likeo" onClick={handleAdd}>
            Add
            </button>
        </Modal.Footer>
        </Modal>
    </>
    );
}

export default AddApplication;