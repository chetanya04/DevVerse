const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const chatRoutes = require('./src/routes/chat');
const socketHandler = require('./src/controllers/socketHandler');
const bodyParser = require('body-parser');
const AuthRouter = require('./src/routes/AuthRouter')
const Videoroute = require('./src/routes/Videoroute')
const CategoryRoute = require('./src/routes/CategoryRoute')
const blogRoutes = require('./src/routes/blogRoute')
const testimonal = require('./src/routes/TestimonalsRoute')
const problemRoute = require('./src/routes/ProblemRoute')
const expertAuthRoutes= require('./src/routes/expertRoutes')
const expertRoutes = require('./src/routes/expertDetails')
const path = require('path')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch((err) => console.error(err));

app.use('/api/chat', chatRoutes);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

socketHandler(io);
app.use(bodyParser.json());
app.use('/auth', AuthRouter);
app.use('/api', Videoroute);
app.use('/api', CategoryRoute);
app.use('/api/blogs', blogRoutes);
app.use('/api/testimonials', testimonal);
app.use('/api', problemRoute)
app.use('/auth/expert', expertAuthRoutes);
app.use('/api/experts', expertRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));