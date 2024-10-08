const express = require('express');
const { getAboutContent } = require('../controllers/aboutController');

const router = express.Router();

// About Us Route
router.get('/', getAboutContent);

module.exports = router;
