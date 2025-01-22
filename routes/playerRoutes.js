const express = require('express');
const { getPlayer, getPlayersByNationality } = require('../controllers/playerController');

const router = express.Router();

router.get('/:id', getPlayer); 
router.get('/filter/nationality', getPlayersByNationality); 

module.exports = router;
