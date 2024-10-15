const express = require('express');

const {    getAllHomeContent,
    getHomeContentById,
    createHomeContent,
    deleteHomeContent,
    updateHomeContent } = require('../controllers/homePageController');

const router = express.Router();

// About Us Route
router.get('/', getAllHomeContent);

// GET a specific "About Us" entry by ID
router.get('/:id', getHomeContentById);

// POST a new "About Us" entry
router.post('/', createHomeContent);

// PUT to update a specific "About Us" entry by ID
router.put('/:id', updateHomeContent);

// DELETE a specific "About Us" entry by ID
router.delete('/:id', deleteHomeContent);

module.exports = router;