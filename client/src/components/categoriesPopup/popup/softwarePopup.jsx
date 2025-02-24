import React, { useState } from "react";
import "../categoriesProb.css";
import ProblemImg from "../../../assets/problem-1.png";
import CategoriesProb2 from "../categories1/page";

export default function Software({ onClose }) {
  const [option, setOption] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [showCategoriesPopup, setShowCategoriesPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("problem-modal")) {
      onClose();
    }
  };

  const handleOkClick = async () => {
    if (!option) {
      setErrorMessage("Please select a category.");
      return;
    }

    if (option === "other" && !otherDetails.trim()) {
      setErrorMessage("Please specify the problem in the input field.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    const problemDetails = {
      category: option === "other" ? otherDetails : option,
      details: option === "other" ? otherDetails : "",
    };

    try {
      const response = await fetch("http://localhost:5000/api/problems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(problemDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the problem. Please try again.");
      }

      // On success, show the CategoriesProb2 popup
      setShowCategoriesPopup(true);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseCategoriesPopup = () => {
    setShowCategoriesPopup(false);
  };

  return (
    <div>
      {!showCategoriesPopup && (
        <div className="problem-modal" onClick={handleClickOutside}>
          <div className="modal-containers">
            <div className="models-img-block">
              <img
                src={ProblemImg}
                alt="Problem Illustration"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2>What kind of problem are you facing in Software Development?</h2>
            <form>
              <div className="input-fields">
                <input
                  type="radio"
                  value="developmentStrategies"
                  checked={option === "developmentStrategies"}
                  onChange={() => setOption("developmentStrategies")}
                />
                <label>How to develop strategies in Software Development?</label>
              </div>

              <div className="input-fields">
                <input
                  type="radio"
                  value="technicalIssues"
                  checked={option === "technicalIssues"}
                  onChange={() => setOption("technicalIssues")}
                />
                <label>How to solve technical issues in Software Development?</label>
              </div>

              <div className="input-fields">
                <input
                  type="radio"
                  value="other"
                  checked={option === "other"}
                  onChange={() => setOption("other")}
                />
                <label>
                  Other
                  <input
                    type="text"
                    id="other-input"
                    placeholder="Please specify"
                    value={otherDetails}
                    onChange={(e) => setOtherDetails(e.target.value)}
                    disabled={option !== "other"}
                  />
                </label>
              </div>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="input-type-btns">
              <button
                className="confirmation"
                onClick={handleOkClick}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Ok"}
              </button>
              <button className="confirmation" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Show CategoriesProb2 as a popup */}
      {showCategoriesPopup && (
        <CategoriesProb2 onClose={handleCloseCategoriesPopup} />
      )}
    </div>
  );
}
