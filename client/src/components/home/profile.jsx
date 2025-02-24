import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token"); 
      console.log("JWT Token:", token); 

      if (!token) {
        setError("No token found. Please log in again.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("User Details:", response.data.user);
        setProfile(response.data.user); 
      } catch (err) {
        console.error("Error fetching user details:", err.response?.data || err.message);
        if (err.response?.status === 401) {
          setError("Unauthorized access. Please log in again.");
        } else {
          setError("Failed to fetch user details. Please try again later.");
        }
      }
    };

    fetchUserDetails();
  }, []);

  // Loading state
  if (!profile && !error) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div style={{ color: "red", padding: "20px" }}>{error}</div>;
  }

  // Profile details
  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
}
