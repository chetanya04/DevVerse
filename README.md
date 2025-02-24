Project Configuration
Environment Variables
Create a .env file in the root directory with the following variables:

env
Copy
Edit
PORT = <server_port>  
MONGO_URI = <mongodb_connection_string>  
JWT_SECRET = <your_jwt_secret>  
TWILIO_ACCOUNT_SID = <twilio_account_sid>  
TWILIO_AUTH_TOKEN = <twilio_auth_token>  
RECEIVER_PHONE_NUMBER = <receiver_phone_with_country_code>  
TWILIO_PHONE_NUMBER = <twilio_phone_number>  
Setup
Clone the repository
Create a .env file with your credentials (see above)
Install dependencies: npm install
Start server: npm start
Features
MongoDB database integration
JWT authentication
SMS notifications via Twilio
