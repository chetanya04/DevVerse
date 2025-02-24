
import React, { useState } from "react";
import "../categories2/categories2Style.css"
import Interact from '../../../assets/interact.png'
import { useLocation } from "react-router-dom";

const CategoriesProb1 = () => {

  const [showModal, setShowModal] = useState(false);
const location = useLocation()
  const isAuth = location.pathname=== '/account'

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
    {!isAuth &&(
        <div className="problam-modal" onClick={handleClickOutside}>
          <div className="modal-container">
            <div className="model-image-block">
                <img src={Interact} style={{ width: "100%", height: "100%" }}/>
            </div>

            <h2>Would you like to interact?</h2>
            
            <div className="input-connect-btnnn">
                <button className="connect-confirmation" style={{background:"red", color:"white"}}><a href="/account"> Connect with Expert </a></button>
                <button className="people-confirmation">Connect with People</button>
            </div>
          </div>
        </div>
      )}
        </div>
  );
};

export default CategoriesProb1;

