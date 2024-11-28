const jwt = require("jsonwebtoken");
const User = require("../models/user");

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register
exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const user = await User.create({ username, email, password, role });
    res
      .status(201)
      .json({
        message: "User registered successfully ",
        token: generateToken(user._id, user.role),
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    res.json({
      message: "Login successful",
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Logout
exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ message: "Logged out successfully" });
};
