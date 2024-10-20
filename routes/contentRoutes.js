const express = require('express');
const {   getAllContentContent,
    getContentContentById,
    createContentContent,
    deleteContentContent,
    updateContentContent } = require('../controllers/contentController');

const router = express.Router();

// About Us Route
router.get('/', getAllContentContent);

// GET a specific "About Us" entry by ID
router.get('/:id', getContentContentById);

// POST a new "About Us" entry
router.post('/', createContentContent);

// PUT to update a specific "About Us" entry by ID
router.put('/:id', updateContentContent);

// DELETE a specific "About Us" entry by ID
router.delete('/:id', deleteContentContent);

module.exports = router;