const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Verify JWT token from request header
const authenticate = async (req, res, next) => {
  try {
    let token;

    // Get token from Authorization header: "Bearer <token>"
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        ok: false,
        err: 'Access denied. No token provided.'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if admin still exists and is active
    const admin = await Admin.findById(decoded.id);
    if (!admin || !admin.active) {
      return res.status(401).json({
        ok: false,
        err: 'Invalid token. Admin not found or deactivated.'
      });
    }

    // Attach admin info to request
    req.admin = {
      id: admin._id,
      username: admin.username,
      role: admin.role
    };

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      err: 'Invalid or expired token.'
    });
  }
};

module.exports = { authenticate };