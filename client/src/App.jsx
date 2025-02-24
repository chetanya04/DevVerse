import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/login-signup/login';
import Signup from './components/login-signup/signup';
import Home from './components/home/home';
import { useEffect, useState } from 'react';
import UserChat from './components/Chat/UserChat';
import styles from "./HomePage.module.css";
import Footer from './components/footer';
import RefrshHandler from './components/RefreshHandler';
import BlogSection from './components/tech-news';
import Suggested from './components/suggested';
import CategoriesSection from './components/categories';
import logo from "./assets/logo.png";
import illustration from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import TestimonialList from './components/Testo';
import Categories from './components/categoriesPage/page';
import Request from './components/request/page';
import Chatpopup from './components/chatPopup/popup';
import AccountDropdown from './components/accounNavtDropdown/account';
import ProfilePage from './components/home/profile';
import ExpertForm from './components/expertSection/expert';
import AdminDashboard from './components/expertSection/AdminDashboard';
import CategoryPage from './components/CategoryPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (event, path) => {
    event.preventDefault(); 
  };


  const openChatPopup = () => {
    setIsChatPopupOpen(true);
  };

  // Function to close the Chat popup
  const closeChatPopup = () => {
    setIsChatPopupOpen(false);
  };
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" /> ;
  };

  // Check if the current route is for login or signup
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/categories' || location.pathname === '/account' || location.pathname=== '/home' || location.pathname === '/chat' || location.pathname=== '/profile' || location.pathname === '/expert' || location.pathname === '/expertChat';
 
  return (
    <div className="App">
      {!isAuthPage && (
        <>
          <div className={styles.homePage}>
            <div className={styles["header-container"]}>
              <div className={styles.navbar}>
                <img src={logo} alt="Logo" width={68} height={30} className={styles.logo} />
                <nav className={styles["nav-links"]}>
                  <a href="/" className={styles['home']} onClick={(e) => handleNavClick(e, "/")}>Home</a>
                   
                    <Chatpopup />
                    <AccountDropdown/>  
                  {/* <a href="/account">Account</a> */}
                  <a href="/categories" className={styles['home']} >Categories</a>
                </nav>
                <div className={styles["auth-buttons"]}>
                  <Login />
                  <Signup />
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
              {/* <CategoryPage /> */}
              <CategoriesSection/>
            </div>
          </div>

          <div className="videoSection">
            <Suggested />
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
          <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        </>
      )}

      <Routes>
      <Route path='/categories' element={<Categories />} />
      <Route path='/home' element={<PrivateRoute element={<Home />} />} />
      <Route path='/chat' element={<UserChat />} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path='/account' element={<Request />} />
      <Route path='/expert' element={<ExpertForm />} />
      <Route path='/expertChat' element={<AdminDashboard />} />
      
      </Routes>
    </div>
  );
}

export default App;
