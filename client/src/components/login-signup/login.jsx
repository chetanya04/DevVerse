import React, { useState } from "react";
import "./loginSignupStyle.css";
import Eye from "../../assets/eye.png";
import Lock from "../../assets/lock.png";
import Email from "../../assets/email.png";
import Password from "../../assets/password.png";
import { handleError, APIUrl, handleSuccess } from "../utlis";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("user");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("signup-modal")) {
      closeModal();
    }
  };

  const handleLogin = async (e) => {
      e.preventDefault();
      const { email, password } = loginInfo;
    
      if (!email || !password) {
        return handleError("Email and password are required.");
      }
    
      try {
        const endpoint = activeTab === "user" ? "/auth/login" : "/auth/expert/login";
        const url = `http://localhost:5000${endpoint}`;
    
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
    
        let result;
        try {
          result = await response.json();
        } catch (jsonError) {
          console.error('JSON parsing error:', jsonError);
          const responseText = await response.text();
          console.error('Response text:', responseText);
          throw new Error('Failed to parse server response');
        }
    
        const { success, message, jwtToken, name, error } = result || {};
    
        if (success) {
          handleSuccess(message);
          localStorage.setItem("token", jwtToken);
          localStorage.setItem("loggedInUser", name);
          localStorage.setItem("role", activeTab);
          const redirectPath = activeTab === "user" ? "/home" : "/expert";
          setTimeout(() => navigate(redirectPath), 1000);
        } else {
          handleError(error?.details?.[0]?.message || message || 'Login failed');
        }
      } catch (err) {
        handleError(err.message || "An error occurred during login.");
      }
    };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const switchTab = (tab) => setActiveTab(tab);

  return (
    <div className="signup-container">
      <button onClick={openModal} className="login-btn-trigger">
        Log In
      </button>
      {showModal && (
        <div className="signup-modal" onClick={handleClickOutside}>
          <div className="register-modal-containerr">
            <div className="signup-header-tab">
              <button
                className={`signup-tab ${activeTab === "user" ? "active" : ""}`}
                onClick={() => switchTab("user")}
              >
                Login as User
              </button>
              <button
                className={`signup-tab ${activeTab === "expert" ? "active" : ""}`}
                onClick={() => switchTab("expert")}
              >
                Login as Expert
              </button>
            </div>

            {/* Login Form */}
            <form className="signup-form" onSubmit={handleLogin}>
              <div className="input-group">
                <span className="icon">
                  <img src={Email} alt="Email Icon" width="18" height="18" />
                </span>
                <label className="form-text">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={loginInfo.email}
                  required
                />
              </div>

              <div className="input-group">
                <span className="icon">
                  <img src={Password} alt="Password Icon" width="18" height="18" />
                </span>
                <label className="form-text">Password</label>
                <div className="changes-vertically">
                  <input
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="********"
                    value={loginInfo.password}
                    required
                  />
                  <span className="toggle-password" onClick={togglePasswordVisibility}>
                    <img
                      src={showPassword ? Lock : Eye}
                      alt="Toggle Password Visibility"
                      width={18}
                      height={18}
                    />
                  </span>
                </div>
              </div>

              <div className="check-box-function">
                <div className="checkbox">
                  <input className="checkbox" type="checkbox" />
                  <label className="rememberMe">Remember me</label>
                </div>
                <div className="link">
                  <a href="#" className="forgot-password">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <btn type="submit" className="signip-btn">
                Login
              </btn>
              <p className="login-text">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;