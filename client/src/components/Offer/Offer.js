import React, { useState } from "react";
import "./Offer.css";
import {Modal} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { deleteoffer, editoffer} from "../../redux/actions/offer";

const Offer=({offer})=>{
    const dispatch=useDispatch()
    const id =useSelector((state)=> state.userReducer.user._id)
    const offerId =useSelector((state)=> state.offerReducer.offer.userId)

    const handleRemove=()=>{
        dispatch(deleteoffer(offer));
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editedOffer, setEditedOffer] = useState(offer)
    const handleChange=(e)=>{
        setEditedOffer({...editedOffer,[e.target.name]:e.target.value})
    }

    function handleEdit(){
        dispatch(editoffer(editedOffer, offer._id));
        handleClose()
    }

    return(
        <div id="card">
            <h1 className="donnees" id="postpost">{offer.post.charAt(0).toUpperCase()+ offer.post.slice(1)}</h1>
            <h4 className="donnees" id="companycompany">{offer.company.charAt(0).toUpperCase()+ offer.company.slice(1)}</h4>
            <h4 className="donnees" id="country">{offer.country.charAt(0).toUpperCase()+ offer.country.slice(1)}</h4>
            <p className="donnees">{offer.company.charAt(0).toUpperCase()+ offer.company.slice(1)} recruits {offer.post.charAt(0).toUpperCase()+ offer.post.slice(1)} with a minimum wage of {offer.minwage}. The job requires the following requirements:{offer.requirements}. All applicants are required to call the following number: {offer.phonenumber} or to send an email to: {offer.email} for an interview before {offer.submissiondeadline}. </p>
            <h6 className="donnees">Date of publication:</h6>
            <h6 className="donnees">{offer.dateofpublication}</h6>
            {/* {offerId===id? */}
            <div id="boxlouta">
                <p className="thelastofl" onClick={handleShow}>Edit</p>
                <p className="thelastofl" onClick={handleRemove}>Delete</p>
            </div>
            {/* : null} */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h1 id="titit">Edit an offer</h1>
                </Modal.Header>
                <Modal.Body>
                    <div className="mod">
                        <p>Minimum wage:</p>
                        <input className="modalinput" onChange={handleChange} type="number" name="minwage" placeholder="minimum wage..."/>
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
                    <button id="likeo" onClick={handleEdit}>
                    Edit
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Offer;