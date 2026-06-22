// Check if user has admin role (not just viewer)
const requireAdmin = (req, res, next) => {
  if (req.admin.role !== 'admin') {
    return res.status(403).json({
      ok: false,
      err: 'Access denied. Admin role required.'
    });
  }
  next();
};

// Check if user is authenticated (either admin or viewer)
const requireAuth = (req, res, next) => {
  // This just ensures the user passed the authenticate middleware
  // Both admin and viewer roles can access these routes
  next();
};

module.exports = { requireAdmin, requireAuth };