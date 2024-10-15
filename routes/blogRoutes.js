const express = require('express');
const {    getAllBlogContent,
    getBlogContentById,
    createBlogContent,
    deleteBlogContent,
    updateBlogContent } = require('../controllers/blogController');

const router = express.Router();

// About Us Route
router.get('/', getAllBlogContent);

// GET a specific "About Us" entry by ID
router.get('/:id', getBlogContentById);

// POST a new "About Us" entry
router.post('/', createBlogContent);

// PUT to update a specific "About Us" entry by ID
router.put('/:id', updateBlogContent);

// DELETE a specific "About Us" entry by ID
router.delete('/:id', deleteBlogContent);

module.exports = router;