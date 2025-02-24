import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import SearchIcon from "../../assets/search-icon.png";
import VoiceCall from "../../assets/voice-call.png";
import VideoCall from "../../assets/video-call.png";
import ChatSetting from "../../assets/chat-setting.png";
import "./chatStyle.css";
import styles from "../../HomePage.module.css"; 
import logos from "../../assets/logo.png";
import AccountDropdown from "../accounNavtDropdown/account";
import UserMenu from '../home/userMenu';
const socket = io("http://localhost:5000");

const ChatWindow = ({ sender, receiver }) => {
  const location = useLocation();
  const { expertId, expertName } = location.state || {};
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [experts, setExperts] = useState([]);

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setTimeout(() => {
      navigate('/');
    }, 1000)
  }

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/experts');
        const data = await response.json();
        setExperts(data);
      } catch (error) {
        console.error('Error fetching experts:', error);
      }
    };

    fetchExperts();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/chat/history`);
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();

    socket.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = { sender, receiver, text: newMessage };
    socket.emit('sendMessage', message);
    setMessages((prev) => [...prev, message]);
    setNewMessage('');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
            <a href="/" className={styles.home}>Home</a>
            <a href="/chat">Chat</a>
            <AccountDropdown/>
            <a href="/categories" className={styles.home}>Categories</a>
          </nav>
          <div className={styles["auth-buttons"]}>
            <UserMenu handleLogout={handleLogout} />
          </div>
        </div>
      </div>
      <div className="chat-content-container">
        <div className="chat-content-block">
          <h2>
            YOUR <span>CHAT</span>
          </h2>
          <p>
            At Cling connect, we bring people together by creating meaningful connections across various domains. Whether you're into web development, design, marketing, or any other field, our platform empowers you to discover like-minded individuals, build relationships, and collaborate on shared interests.
          </p>
        </div>
      </div>

      <div className="chat-container-main-block">
  <div className={`sidebar-block ${isSidebarOpen ? 'active' : ''}`}>
    <div className="search-bar">
      <span><img src={SearchIcon} style={{ width: "15px", height: "15px" }} alt="Search" /></span>
      <input type="text" placeholder="Search Conversation" />
    </div>
    <ul className="conversations-main-block">
      {experts.map((expert) => (
        <li
          key={expert._id}
          className={`conversation-card-block ${selectedChat === expert._id ? 'active-card' : ''}`}
          onClick={() => setSelectedChat(expert._id)} // Use expert._id to set selectedChat
        >
          <div className="conversion-inner-card">
            <img src={expert.photo || 'default-avatar.png'} alt={expert.name} width="40" />
            <div className="expert-info">
              <h4>{expert.name}</h4>
              <p>{expert.expertise}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>

  <div className="toggle-sidebar-btn" onClick={toggleSidebar}>☰</div>

  <div className="chat-window">
    <div className="chat-header">
      <div className="chat-header-details">
        {/* Display the selected expert's photo */}
        {selectedChat && (
          <>
            <img
              src={experts.find((expert) => expert._id === selectedChat)?.photo || 'default-avatar.png'}
              alt="Expert"
              width="40"
              className="expert-window"
            />
            <h3>{experts.find((expert) => expert._id === selectedChat)?.name}</h3>
          </>
        )}
        <div className="status">Online</div>
      </div>
      <div className="chat-icons">
        <span><img src={VoiceCall} style={{ width: "24px", height: "24px" }} alt="Voice Call" /></span>
        <span><img src={VideoCall} style={{ width: "33px", height: "20px" }} alt="Video Call" /></span>
        <span><img src={ChatSetting} style={{ width: "24px", height: "24px" }} alt="Chat Settings" /></span>
      </div>
    </div>

    <div className="chat-body">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender === sender ? "sent" : "received"}`}>
          {msg.sender === sender ? (
            <>
              <div className="message-content sent-content">{msg.text}</div>
              <div className="triangle"></div>
            </>
          ) : (
            <div className="message-content received-content">{msg.text}</div>
          )}
        </div>
      ))}
    </div>

    <div className="footer-chat-input">
      <input
        type="text"
        placeholder="Type a message here..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  </div>
</div>

    </>
  );
};

export default ChatWindow;