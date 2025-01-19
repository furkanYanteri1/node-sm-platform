const express = require('express');
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: `Hello, User ${req.user.id}! This is your profile.` });
});

module.exports = router;
