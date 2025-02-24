import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../request/requestStyle.css";
import SearchIcon from "../../assets/search-icon.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Facebook from "../../assets/facebook.png";
import { useNavigate } from 'react-router-dom';
import styles from "../../homePage.module.css"
import logos from "../../assets/logo.png";
import AccountDropdown from "../accounNavtDropdown/account";
import UserMenu from "../home/userMenu";
import RequestPage from '../requestPopup/page';

const ExpertDetails = () => {
  const [expertDetails, setExpertDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleViewMore = (expert) => {
    setSelectedExpert(expert);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setTimeout(() => {
      navigate('/');
    }, 1000)
  }

  const handleSendRequest = (expert) => {
    navigate('/chat', { state: { expertId: expert._id, expertName: expert.name } });
  };

  const fetchExpertDetails = async () => {
    try {
      console.log("Fetching expert details...");
      const response = await axios.get('http://localhost:5000/api/experts', {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Full response:", response);
      console.log("Response data:", response.data);

      // Add more flexible data extraction
      const experts = response.data.experts ||
        response.data.data ||
        response.data ||
        [];

      console.log("Extracted experts:", experts);

      setExpertDetails(experts);
      setLoading(false);
    } catch (err) {
      console.error("Error details:", err);
      setError(
        err.response?.data?.message ||
        err.message ||
        'Error fetching expert details'
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpertDetails();
  }, []);

  if (loading) return <div>Loading experts...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredExperts = expertDetails.filter((expert) =>
    expert.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="request-container">
        <div className={styles["header-container"]}>
          <div className={styles.navbar}>
            <img
              src={logos}
              alt="Logo"
              width={68}
              height={30}
              className={styles.logo}
            />
            <nav className={styles["nav-links"]}>
              <a href="/" className={styles.home}>
                Home
              </a>
              <a href="/chat">Chat</a>
              <AccountDropdown />
              <a href="/categories" className={styles.home}>
                Categories
              </a>
            </nav>
            <div className={styles["auth-buttons"]}>
              {/* Pass handleLogout to UserMenu */}
              <UserMenu handleLogout={handleLogout} />
            </div>
          </div>
        </div>
        <div className="request-sub-block">
          <div className="request-content">
            <h2>
              Connect with <span>experts</span>
            </h2>
            <p>
              Join a thriving community where you can connect with industry experts and gain valuable insights.
            </p>
            <div className="input">
              <span>
                <img src={SearchIcon} style={{ width: "15px", height: "15px" }} alt="Search" />
              </span>
              <input
                type="text"
                className="search-expert"
                placeholder="Search Experts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="section-class">
        <div className="card-container-block">
          {filteredExperts.length === 0 ? (
            <p>No experts found</p>
          ) : (
            filteredExperts.map((expert, index) => (
              <div className="card-blocks" key={expert._id || index}>
                <img
                  className='profile-images'
                  src={expert.photo}
                  alt="img"
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
                />
                <div className="expert-details">
                  <h3>{expert.name || 'Unnamed Expert'}</h3>
                  <p><strong>Designation:</strong> {expert.designation}</p>
                  <p><strong>Experience:</strong> {expert.experience} years</p>
                  <div className="social-medias">
                    <div className="social-media-icons">
                      <a href="https://www.linkedin.com/"><img
                        src={LinkedIn}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                        alt="LinkedIn"
                      /> </a>
                    </div>
                    <div className="social-media-icons">
                      <a href="https://www.instagram.com/">
                        <img
                          src={Instagram}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          alt="Instagram"
                        />
                      </a>
                    </div>
                    <div className="social-media-icons">
                      <a href="https://www.facebook.com/">
                        <img
                          src={Facebook}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          alt="Facebook"
                        />
                      </a>
                    </div>
                  </div>

                </div>
                <div className="input-btns">
                  <button
                    className="sends"
                    onClick={() => handleSendRequest(expert)}
                    disabled={!expert._id}
                  >
                    Send Request
                  </button>
                  <button className="views" onClick={() => handleViewMore(expert)}>
                    View More
                  </button>
                  {isPopupVisible && <RequestPage expert={selectedExpert} onClose={closePopup} />}

                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default ExpertDetails;