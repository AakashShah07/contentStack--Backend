const express = require('express');

const {  getAllHomeContent,
    getHomeContentById, } = require('../controllers/homePageController');

const router = express.Router();

// About Us Route
router.get('/', getAllHomeContent);

// GET a specific "About Us" entry by ID
router.get('/:id', getHomeContentById);

// POST a new "About Us" entry
// router.post('/', createAboutContent);

// // PUT to update a specific "About Us" entry by ID
// router.put('/:id', updateAboutContent);

// // DELETE a specific "About Us" entry by ID
// router.delete('/:id', deleteAboutContent);

module.exports = router;