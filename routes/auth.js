const express = require('express');
const { register, login } = require('../controllers/authController'); // Ensure correct import path

const router = express.Router();

router.post('/register', register); // Ensure these match your controllers
router.post('/login', login);

module.exports = router;
