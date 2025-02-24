import React, { useState } from 'react';
import "./loginSignupStyle.css";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { APIUrl, handleError, handleSuccess } from '../utlis';
import Profile from "../../assets/profile.png";
import Eye from "../../assets/eye.png";
import Lock from "../../assets/lock.png";
import Email from "../../assets/email.png";
import Domain from "../../assets/domain.png";
import Company from "../../assets/company.png";
import Password from "../../assets/password.png";

function Signup() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    domain: '',
    designation: '',
    experience: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    const { name, email, password, designation, experience } = signupInfo;
  
    if (activeTab === "user") {
      if (!name || !email || !password) {
        return handleError('Please fill in all required fields for User Signup.');
      }
    } else if (activeTab === "expert") {
      if (!name || !email || !password || !designation || !experience) {
        return handleError('Please fill in all required fields for Expert Signup.');
      }
    }
  
    try {
      const url = activeTab === "user" 
        ? `http://localhost:5000/auth/signup` 
        : `http://localhost:5000/auth/expert/signup`;
  
      const payload =
        activeTab === "user"
          ? { name, email, password } // Exclude domain here
          : { name, email, password, designation, experience };
  
      const response = await fetch(url, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
      const { success, message, error } = result;
  
      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate('/home'), 1000);
      } else {
        handleError(error?.details[0]?.message || message);
      }
    } catch (err) {
      handleError(err.message || 'Something went wrong.');
    }
  };
  


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className='signup-container'>
      <button onClick={openModal} className="signup-btn-trigger">Sign Up</button>
      {showModal && (
        <div className="signup-modal" onClick={(e) => e.target.classList.contains("signup-modal") && closeModal()}>
          <div className="register-modal-containerr">
            <div className="signup-header-tab">
              <button
                className={`signup-tab ${activeTab === "user" ? "active" : ""}`}
                onClick={() => setActiveTab("user")}
              >
                Sign up as User
              </button>
              <button
                className={`signup-tab ${activeTab === "expert" ? "active" : ""}`}
                onClick={() => setActiveTab("expert")}
              >
                Sign up as Expert
              </button>
            </div>

<form onSubmit={handleSignup} className="signup-form">
  <div className="input-group">
    <span className="icon"><img src={Profile} alt="Profile" width="20" height="20" /></span>
    <label className="form-text">Name</label>
    <input onChange={handleChange} value={signupInfo.name} type="text" name="name" placeholder="Name" required />
  </div>

  <div className="input-group">
    <span className="icon"><img src={Email} alt="Email" width="18" height="18" /></span>
    <label className="form-text">Email</label>
    <input onChange={handleChange} value={signupInfo.email} type="email" name="email" placeholder="example@gmail.com" required />
  </div>
  



      <div className="input-group" style={{ display: 'none' }}>
        <span className="icon"><img src={Domain} alt="Domain" width="18" height="18" /></span>
        <label className="form-text">Domain</label>
        <input
          onChange={handleChange}
          value={signupInfo.domain}
          type="text"
          name="domain"
          placeholder="Enter your domain"
        />
      </div>

    <div className="input-group">
      <span className="icon"><img src={Company} alt="Domain" width="18" height="18" /></span>
      <label className="form-text">Company</label>
      <input
        onChange={handleChange}
        value={signupInfo.company}
        type="text"
        name="company"
        placeholder="Company"
        required
      />
  
    </div>

    <>
      <div className="input-group">
        <span className="icon"><img src={Domain} alt="Experience" width="18" height="18" /></span>
        <label className="form-text">Domain</label>
        <input
          onChange={handleChange}
          value={signupInfo.experience}
          type="number"
          name="experience"
          placeholder="Domain"
          required
        />
      </div>
  <div className="input-group">
    <span className="icon"><img src={Password} alt="Password" width="18" height="18" /></span>
    <label className="form-text">Password</label>
    <div className="changes-vertically">
      <input
        onChange={handleChange}
        value={signupInfo.password}
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="6+ Characters, 1 Capital Letter"
        required
      />
      <span className="toggle-password" onClick={togglePasswordVisibility}>
        <img src={showPassword ? Lock : Eye} alt="Toggle Password" width={18} height={18} />
      </span>
    </div>
  </div>
    </>

  {/* Actions */}
  <button type="submit" className="signup-btn">Sign Up</button>
  <p className="login-text">Already have an account? <Link to="/login">Log In</Link></p>
</form>

            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
