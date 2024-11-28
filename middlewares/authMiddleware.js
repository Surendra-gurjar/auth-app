const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("Authorization Header:", authHeader);

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }

  if (!token) {
    return res
      .status(401)
      .json({ error: "Not authorized, no token found in header" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    res.status(401).json({ error: "Not authorized, token failed" });
  }
};
