
import React, { useState } from "react";
import '../../requestPopup/requestPopup.css'
import RequestSentImage from "../../../assets/sent-request.png"

const RequestSent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("problem-modal")) {
      closeModal();
    }
  };

  return (
    <div className="categories-problem">
        <div className="problem-modal" onClick={handleClickOutside}>
          <div className="modal-container">
            <div className="profile-imageses">
                <img src={RequestSentImage} style={{width:"100%" , height:"100%"}}/>
            </div>
            <div className="profileName">
            <h2>Request Sent!</h2> 
            </div>
            
            <div className="input-btns">
                <button className="go-back"><a href="/">Go Back </a></button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default RequestSent;
