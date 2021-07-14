import React from "react";
import { useState } from "react";
import {Modal} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { addoffer} from "../../redux/actions/offer";
import "./AddOffer.css";

function AddOffer() {
    const id =useSelector((state)=> state.userReducer.user._id)
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newOffer,setNewOffer] = useState();

    const handleChange=(e)=>{
        setNewOffer({...newOffer,[e.target.name]:e.target.value,userId:id})
    };

    const dispatch= useDispatch()
    const handleAdd=(e)=>{
        e.preventDefault();
        dispatch(addoffer(newOffer));
        handleClose();
    }
    return (
    <>
        <button id="likeo" onClick={handleShow}>
        Add an offer
        </button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <h1 id="titit">Add an offer</h1>
        </Modal.Header>
        <Modal.Body>
            <div className="mod">
                <div><p>Company:</p></div>
                <input className="modalinput" onChange={handleChange} type="text" name="company" placeholder="company..."/>
            </div>
            <div className="mod">
                <p>Post:</p>
                <input className="modalinput" onChange={handleChange} type="text" name="post" placeholder="post..."/>
            </div>
            <div className="mod">
                <p>Minimum wage:</p>
                <input className="modalinput" onChange={handleChange} type="number" name="minwage" placeholder="minimum wage..."/>
            </div>
            <div className="mod">
                <p>Country:</p>
                <input className="modalinput" onChange={handleChange} type="text" name="country" placeholder="country..."/>
            </div>
            <div className="mod">
                <p>Requirements:</p>
                <input className="modalinputx" onChange={handleChange} type="text" name="requirements" placeholder="requirements..."/>
            </div>
            <div className="mod">
                <p>Date of publication:</p>
                <input className="modalinput" onChange={handleChange} data-date-format="DD MMMM YYYY" type="date" name="dateofpublication"/>
            </div>
            <div className="mod">
                <p>Submission deadline:</p>
                <input className="modalinput" onChange={handleChange} type="date" name="submissiondeadline"/>
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

export default AddOffer;