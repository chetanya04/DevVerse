import React, { useState } from "react";
import './popupStyleChat.css'
import Chatpop from "../../assets/chat-logo.png"
import Login from "../login-signup/login";
import Signup from "../login-signup/signup";

const Chatpopup = () => {
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
      <a onClick={openModal} className="chat-categories-btn">
        Chat
      </a>

      {showModal && (
        <div className="problem-modal" onClick={handleClickOutside}>
          <div className="chat-modal-containerr">
            <div className="model-img-block">
                <img src={Chatpop} style={{ width: "100%", height: "100%" }}/>
            </div>

            <h3>Please Sign Up  or Log In to view Chats</h3>
            
            <div className="chat-input-type-btn">
                <Login/>
                
                 <Signup/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatpopup;