import React, { useState } from "react";
import {Modal} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { deleteapplication, editapplication} from "../../redux/actions/application";

const Application=({application})=>{
    const dispatch=useDispatch()
    const id =useSelector((state)=> state.userReducer.user._id)
    const applicationId =useSelector((state)=> state.applicationReducer.application.applicationId)

    const handleRemove=()=>{
        dispatch(deleteapplication(application));
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editedApplication, setEditedApplication] = useState(application)
    const handleChange=(e)=>{
        setEditedApplication({...editedApplication,[e.target.name]:e.target.value})
    }

    function handleEdit(){
        dispatch(editapplication(editedApplication, application._id));
        handleClose()
    }

    return(
        <div id="card">
            <h1 className="donnees" id="postpost">{application.post.charAt(0).toUpperCase()+ application.post.slice(1)}</h1>
            <h4 className="donnees" id="companycompany">{application.name.charAt(0).toUpperCase()+ application.name.slice(1)}</h4>
            <h4 className="donnees" id="country">{application.country.charAt(0).toUpperCase()+ application.country.slice(1)}</h4>
            {/* <p className="donnees">{offer.company.charAt(0).toUpperCase()+ offer.company.slice(1)} recruits {offer.post.charAt(0).toUpperCase()+ offer.post.slice(1)} with a minimum wage of {offer.minwage}. The job requires the following requirements:{offer.requirements}. All applicants are required to call the following number: {offer.phonenumber} or to send an email to: {offer.email} for an interview before {offer.submissiondeadline}. </p> */}
            {applicationId===id?
            <div id="boxlouta">
                <p className="thelastofl" onClick={handleShow}>Edit</p>
                <p className="thelastofl" onClick={handleRemove}>Delete</p>
            </div>
            : null}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h1 id="titit">Edit an application</h1>
                </Modal.Header>
                <Modal.Body>
                    <div className="mod">
                        <p>Qualifications:</p>
                        <input className="modalinput" onChange={handleChange} type="text" name="qualifications" placeholder="qualifications..."/>
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
                    <button id="likeo" onClick={handleEdit}>
                    Edit
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Application;