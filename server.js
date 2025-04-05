const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Server
const PORT = process.env.PORT || 5001; // Railway will override this
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`)); // '0.0.0.0' listens on all network interfaces
