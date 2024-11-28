require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

const app = express();


app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the RBAC Application!');
  });

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
