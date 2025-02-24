import React, { useState } from "react";
import "../requestPopup/requestPopup.css";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import ProfileLogo from "../../assets/biopic.png";
import RequestSent from "./requestSent/page";
import { useNavigate } from "react-router-dom";

const RequestPage = ({ expert, onClose }) => {
  const [showRequestSent, setShowRequestSent] = useState(false);
  const navigate = useNavigate();

  const handleSendRequest = () => {
    navigate('/chat', { state: { expertId: expert._id, expertName: expert.name } });
  };

  return (
    <>
      {!showRequestSent ? (
        <div className=" modal">
          <div className="modal-container">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <div className="profile-image">
              <img
                src={expert.photo || ProfileLogo}
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="prfileName">
              <h2>{expert.name || "Unnamed Expert"}</h2>
            </div>
            <div className="profile-title">
              <p>{expert.designation || "No designation available"}</p>
              <p>{`Experience: ${expert.experience || 0} years`}</p>
            </div>
            <div className="social-media">
            <div className="social-media-icon">
                <img
                  src={LinkedIn}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="social-media-icon">
                <img
                  src={Instagram}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="social-media-icon">
                <img
                  src={Facebook}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="Achivement">
              <div className="award">
                <h2>100</h2>
                <p>Solved Problems</p>
              </div>
              <div className="award">
                <h2>100</h2>
                <p>Classes Taken</p>
              </div>
              <div className="award">
                <h2>10</h2>
                <p>Best Expert Award</p>
              </div>
            </div>
            <div className="input-btn">
              <button className="buttons" onClick={handleSendRequest}>
                Send Request
              </button>
            </div>
          </div>
        </div>
      ) : (
        <RequestSent />
      )}
    </>
  );
};

export default RequestPage;

