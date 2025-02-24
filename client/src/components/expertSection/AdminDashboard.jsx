import React from 'react';
import ChatWindow from '../Chat/ChatWindow';

const AdminDashboard = () => {
  const admin = 'admin';
  const user = 'user'; // Replace with dynamic user management if needed

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <ChatWindow sender={admin} receiver={user} />
    </div>
  );
};

export default AdminDashboard;
