const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routers
const locationRouter = require('./api/router/location.router');

// Sử dụng biến môi trường từ file .env (Heroku sẽ đặt biến môi trường trong hệ thống)
const MONGODB_URI = process.env.MONGODB_URI;

// ✅ Dùng async/await thay cho callback
async function connectDB() {
  try {
    if (!MONGODB_URI) {
      throw new Error('Missing MONGODB_URI environment variable');
    }
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Đã kết nối MongoDB');
  } catch (err) {
    console.error('❌ Lỗi kết nối MongoDB:', err);
  }
}
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'IoT API Server',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      health: '/health',
      devices: '/api/devices',
      sensors: '/api/sensors',
      locations: {
        get: 'GET /v1/api/location',
        create: 'POST /v1/api/location/create'
      }
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// API Routes
app.get('/api/devices', (req, res) => {
  res.json({
    message: 'Get all devices',
    data: []
  });
});

app.post('/api/devices', (req, res) => {
  res.json({
    message: 'Create device',
    data: req.body
  });
});

app.get('/api/sensors', (req, res) => {
  res.json({
    message: 'Get all sensors',
    data: []
  });
});

app.post('/api/sensors', (req, res) => {
  res.json({
    message: 'Create sensor',
    data: req.body
  });
});

// Use routers with versioning
app.use('/v1/api/location', locationRouter);
app.use('/api/location', locationRouter); // Backward compatibility

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
