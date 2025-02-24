const Message = require('../models/Message');
const twilioClient = require('../config/twilio');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('sendMessage', async ({ sender, receiver, text }) => {
      const message = new Message({ sender, receiver, text });
      await message.save();

      // Broadcast the message to all connected twilioClients
      io.emit('receiveMessage', message);

      // Send SMS notification to the receiver (if user is offline)
      twilioClient.messages.create({
        body: `New message from ${sender}: ${text}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.RECEIVER_PHONE_NUMBER, // Replace with actual recipient's phone number
      }).then(() => {
        console.log('SMS sent successfully');
      }).catch((err) => {
        console.error('Twilio Error:', err.message);
      });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
