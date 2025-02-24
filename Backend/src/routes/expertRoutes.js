const express = require('express');
const { expertSignup, expertLogin,verifyToken} = require('../controllers/ExpertAuthController');
const router = express.Router();

router.post('/signup', expertSignup);
router.post('/login', expertLogin);
router.get("/details", verifyToken, (req, res) => {
    try {
      const expert = req.expert;
      res.status(200).json({
        message: "Expert details fetched successfully",
        success: true,
        expert,
      });
    } catch (err) {
      res.status(500).json({ message: "Server error", success: false });
    }
  });

module.exports = router;
