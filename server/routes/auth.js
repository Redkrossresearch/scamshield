// const express = require('express');
// const router = express.Router();

// router.get('/test', (req, res) => {
//   res.json({ ok: true, message: 'Auth route working' });
// });

// module.exports = router;
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const { authenticate } = require('../middleware/auth');
const { requireAdmin, requireAuth } = require('../middleware/admin');

const router = express.Router();

// ─── POST /api/auth/login ──────────────────────────────────────────────────
// Admin login - returns JWT token
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        ok: false,
        err: 'Please provide username and password.'
      });
    }

    // Check if admin exists
    const admin = await Admin.findOne({ username: username.toLowerCase() });
    if (!admin) {
      return res.status(401).json({
        ok: false,
        err: 'Invalid credentials.'
      });
    }

    // Check if admin is active
    if (!admin.active) {
      return res.status(403).json({
        ok: false,
        err: 'Account is deactivated. Contact super admin.'
      });
    }

    // Verify password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        ok: false,
        err: 'Invalid credentials.'
      });
    }

    // Update last login
    admin.last_login = new Date();
    await admin.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    // Return token + admin info (NO password hash!)
    res.json({
      ok: true,
      token: token,
      admin: {
        id: admin._id,
        username: admin.username,
        role: admin.role,
        last_login: admin.last_login
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      ok: false,
      err: 'Server error during login.'
    });
  }
});

// ─── POST /api/auth/logout ─────────────────────────────────────────────────
// Client-side logout (just clear the token)
router.post('/logout', (req, res) => {
  res.json({
    ok: true,
    message: 'Logged out successfully. Please clear your token.'
  });
});

// ─── GET /api/auth/verify ──────────────────────────────────────────────────
// Check if current token is still valid
router.get('/verify', authenticate, (req, res) => {
  res.json({
    ok: true,
    admin: {
      id: req.admin.id,
      username: req.admin.username,
      role: req.admin.role
    }
  });
});

// ─── POST /api/auth/register ───────────────────────────────────────────────
// Create new admin (only accessible by existing admin)
router.post('/register', authenticate, requireAdmin, async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        ok: false,
        err: 'Please provide username and password.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        ok: false,
        err: 'Password must be at least 6 characters.'
      });
    }

    // Check if admin already exists
    const existing = await Admin.findOne({ username: username.toLowerCase() });
    if (existing) {
      return res.status(400).json({
        ok: false,
        err: 'Username already exists.'
      });
    }

    // Create new admin
    const admin = new Admin({
      username: username.toLowerCase(),
      password_hash: password,  // Will be hashed by pre-save hook
      role: role || 'admin'
    });

    await admin.save();

    res.status(201).json({
      ok: true,
      message: 'Admin created successfully.',
      admin: {
        id: admin._id,
        username: admin.username,
        role: admin.role
      }
    });

  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      ok: false,
      err: 'Server error during registration.'
    });
  }
});

module.exports = router;