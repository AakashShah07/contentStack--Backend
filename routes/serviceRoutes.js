const express = require('express');
const {  getAllServiceContent,
    getServiceContentById,
    createServiceContent,
    deleteServiceContent,
    updateServiceContent } = require('../controllers/serviceController');

const router = express.Router();

// About Us Route
router.get('/', getAllServiceContent);

// GET a specific "About Us" entry by ID
router.get('/:id', getServiceContentById);

// POST a new "About Us" entry
router.post('/', createServiceContent);

// PUT to update a specific "About Us" entry by ID
router.put('/:id', updateServiceContent);

// DELETE a specific "About Us" entry by ID
router.delete('/:id', deleteServiceContent);

module.exports = router;