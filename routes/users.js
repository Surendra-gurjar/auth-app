const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/admin', protect, authorize('Admin'), (req, res) => {
  res.send('Admin resource');
});

router.get('/user', protect, authorize('User'), (req, res) => {
  res.send('User resource');
});
router.get('/moderator', protect, authorize('Moderator'), (req, res) => {
  res.send('moderator resource');
});


module.exports = router;
