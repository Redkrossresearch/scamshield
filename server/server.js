require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// ─── MIDDLEWARE ────────────────────────────────────────────────────────────

// CORS - allow frontend to call this API
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:8888',
  credentials: true
}));

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting - prevents abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 200,                  // limit each IP to 200 requests per windowMs
  message: {
    ok: false,
    err: 'Too many requests, please try again later.'
  }
});
app.use('/api/', limiter);

// ─── ROUTES ────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    status: 'running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Mount route files (we'll create these next)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/userAuth'));
app.use('/api/session', require('./routes/sessions'));
app.use('/api/attempt', require('./routes/attempts'));
app.use('/api/game', require('./routes/games'));
app.use('/api/modules', require('./routes/modules'));
app.use('/api/admin', require('./routes/admin'));
// ─── ERROR HANDLING ────────────────────────────────────────────────────────

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    ok: false,
    err: 'Endpoint not found',
    path: req.path
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(err.status || 500).json({
    ok: false,
    err: err.message || 'Internal server error'
  });
});

// ─── START SERVER ──────────────────────────────────────────────────────────

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🛡️  ScamShield API running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health\n`);
});