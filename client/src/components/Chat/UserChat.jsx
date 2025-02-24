import React from 'react';
import ChatWindow from './ChatWindow';

const UserChat = () => {
  const user = 'user';
  const admin = 'admin';

  return (
    <div className="user-chat">
      <ChatWindow sender={user} receiver={admin} />
    </div>
  );
};

export default UserChat;
