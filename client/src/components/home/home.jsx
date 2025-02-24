import { useEffect, useState } from "react"
import  {useNavigate} from "react-router-dom"
import { handleSuccess } from "../utlis"
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import logos from "../../assets/logo.png";
import styles from "../../HomePage.module.css";
import Footer from "../footer";
import BlogSection from "../tech-news";
import SuggestedVideos from "../suggested";
import CategoriesSection from "../categories";
import illustration from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import TestimonialList from "../Testo";
import AccountDropdown from "../accounNavtDropdown/account";
import UserMenu from "./userMenu";
import ChatWindow from "../Chat/ChatWindow";

export default function Home() {
    const [loggedInUser,setLoggedInUser]=useState('')
    const navigate = useNavigate()
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (event, path) => {
    event.preventDefault(); 
  };

    useEffect(()=>{
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    },[])


    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/');
        }, 1000)
    }

    const AuthPage = location.pathname === '/chat'  ; 

        

    return(
      <div className="app">
      {!AuthPage &&(
        <>
      <div>
      <div className={styles.homePage}>
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
              <AccountDropdown/>
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

              <div className={styles["banner-section"]}>
                <div className={styles["banner-text-section"]}>
                  <h1 className={styles["banner-title"]}>
                    <span className={styles["ours"]}>Find Your People,</span>{" "}
                    <span className={styles["videos"]}>Build Your Network and</span> Connect with{" "}
                    <span className={styles["videos"]}>Expertise!</span>
                  </h1>
                  <p className={styles["banner-description"]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className={styles["banner-buttons"]}>
                    <button className={styles["explore-button"]}>Explore More</button>
                    <button className={styles["connect-button"]}>Connect with Expertise</button>
                  </div>
                </div>
                <img src={illustration} alt="Illustration" width={580} height={370} className={styles.illustration} />
              </div>
            </div>

            <div className={styles["features-section"]}>
              <div className={styles["features-content"]}>
                <div className="features-div">
                <div className={styles["features-text"]}>
                  <h2 className={styles["features-title"]}>What We do</h2>
                  <h3 className={styles["features-subtitle"]}>FEATURES OF CLING CONNECT</h3>
                  <p className={styles["features-description"]}>
                    At Cling connect, we bring people together by creating meaningful connections across various
                    domains. Whether you're into web development, design, marketing, or any other field, our
                    platform empowers you to discover like-minded individuals, build relationships, and
                    collaborate on shared interests.
                  </p>
                </div>
                </div>
                <div className={styles["features-images"]}>
                  <div className={styles["feature-card"]}>
                    <img src={image4} alt="Real-Time Communication" width={100} height={100} />
                    <h4>Real-Time Communication</h4>
                    <p>Offers instant messaging, video calls, or voice calls for real-time interactions.</p>
                  </div>
                  <div className={styles["feature-card"]}>
                    <img src={image5} alt="Domain Expertise Matching" width={100} height={100} />
                    <h4>Domain Expertise Matching</h4>
                    <p>Users can connect with experts from various fields based on their specific queries or problems.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["categories-section"]}>
              <CategoriesSection />
            </div>
          </div>

          <div className="videoSection">
            <SuggestedVideos />
          </div>

          <div className={styles.blogsSection}>
            <BlogSection />
          </div>

          <h2 className={styles.our}>
            OUR <span className={styles.video}>TESTIMONIAL</span>
          </h2>

          <div className={styles["testimonial-list"]}>
            <TestimonialList />
          </div>

          <div className={styles["footer1"]}>
            <h2 className={styles["foot"]}>Are you excited to connect with peers!</h2>
            <p className={styles["footpara"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptate Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ab, voluptate Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ab, voluptate.
            </p>
            <button>Connect</button>
          </div>
            <Footer />
            </>    
          )}
          <Routes>
        <Route path='/chat' element={<ChatWindow />} />
      </Routes>
          </div>
      )}