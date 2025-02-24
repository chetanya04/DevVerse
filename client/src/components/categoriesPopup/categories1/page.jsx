import React, { useState } from "react";
import "./categories1Style.css";
import CategoriesProb1 from "../categories2/page";

const CategoriesProb2 = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("problem-modal")) {
      onClose();
    }
  };

  const handleNextClick = () => {
    setShowModal(true); 
  };

  return (
    <div className="expertise-cate-problem">
    <div className="expertise-problem-modal" onClick={handleClickOutside}>
      <div className="expertise-modal-container">
        <form className="pop-forms">
          <div className="expertise-input-field">
            <label className="ques">Your Expertise Field?</label>
            <input type="text" className="field-text" />
          </div>
          <div className="expertise-input-explain">
            <label className="ques">
              Explain the problem you’re facing and what you’ve tried?
            </label>
            <textarea name="text" rows="7" cols="50"></textarea>
          </div>
        </form>
        <div className="expertise-input-type-btn">
          <button className="confirmation-btn" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>

      {/* Conditionally render CategoriesProb1 modal */}
      {showModal && <CategoriesProb1 />}
    </div>
    </div>
  );
};

export default CategoriesProb2;
