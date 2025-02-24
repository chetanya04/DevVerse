import React, { useState } from "react";
import "./categoriesStyle.css";
import categories from "./data";
import styles from  "../../homePage.module.css"
import logos from "../../assets/logo.png";
import AccountDropdown from "../accounNavtDropdown/account";  
import UserMenu from "../home/userMenu";


function Categories() {
  const [filter, setFilter] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleLogout = (e) => {
          localStorage.removeItem('token');
          localStorage.removeItem('loggedInUser');
          handleSuccess('User Loggedout');
          setTimeout(() => {
              navigate('/');
          }, 1000)
      }

  const filteredCategories = () => {
    if (filter === "All") {
      return categories;
    }
    return categories.filter((category) => category.type === filter);
  };

  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  return (
    <>
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
      <div className="categories-container">
        <div className="categories-sub-block">
          <div className="categories-contant">
            <h2>
              OUR <span>CATEGORIES</span>
            </h2>
            <p>
              At Cling Connect, we bring people together by creating meaningful
              connections across various domains. Whether you're into web
              development, design, marketing, or any other field, our platform
              empowers you to discover like-minded individuals, build
              relationships, and collaborate on shared interests.
            </p>
          </div>
          <div className="input-type-btn">
            <button
              className={filter === "All" ? "active" : ""}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={filter === "IT" ? "active" : ""}
              onClick={() => setFilter("IT")}
            >
              IT
            </button>
            <button
              className={filter === "Non IT" ? "active" : ""}
              onClick={() => setFilter("Non IT")}
            >
              Non IT
            </button>
          </div>
        </div>
      </div>

      <section className="section-card">
        <div className="card-container-block">
          <div className="card-container-sub-block">
            {filteredCategories().map((category) => (
              <div
                className="card-block"
                key={category.id}
                onClick={() => handleCardClick(category)}
              >
                <div className="card-image">
                  <img
                    src={category.image}
                    alt={category.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="card-name">
                  <h3>{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
            <selectedCategory.popup />
          </div>
        </div>
      )}
    </>
  );
}

export default Categories;
