const express = require('express');
const {  getAllAboutContent,
    getAboutContentById,
    createAboutContent,
    updateAboutContent,
    deleteAboutContent } = require('../controllers/aboutController');

const router = express.Router();

// About Us Route
router.get('/', getAllAboutContent);

// GET a specific "About Us" entry by ID
router.get('/:id', getAboutContentById);

// POST a new "About Us" entry
router.post('/', createAboutContent);

// PUT to update a specific "About Us" entry by ID
router.put('/:id', updateAboutContent);

// DELETE a specific "About Us" entry by ID
router.delete('/:id', deleteAboutContent);

module.exports = router;