const express = require('express');
const {    getAllVisualsVisuals,
    getVisualsVisualsById,
    createVisualsVisuals,
    deleteVisualsVisuals,
    updateVisualsVisuals } = require('../controllers/visualsController');

const router = express.Router();

// About Us Route
router.get('/', getAllVisualsVisuals);

// GET a specific "About Us" entry by ID
router.get('/:id', getVisualsVisualsById);

// POST a new "About Us" entry
router.post('/', createVisualsVisuals);

// PUT to update a specific "About Us" entry by ID
router.put('/:id', updateVisualsVisuals);

// DELETE a specific "About Us" entry by ID
router.delete('/:id', deleteVisualsVisuals);

module.exports = router;