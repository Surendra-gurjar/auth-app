exports.authorize = (...roles) => (req, res, next) => {
  const userRole = req.user.role?.toLowerCase();
  const allowedRoles = roles.map((role) => role.toLowerCase());
  
  if (!allowedRoles.includes(userRole)) {
    return res.status(403).json({ error: 'Forbidden, insufficient role' });
  }
  next();
};
