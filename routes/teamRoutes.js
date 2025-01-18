const express = require('express');
const { getTeam } = require('../controllers/teamController');

const router = express.Router();

router.get('/:id', getTeam); 
module.exports = router;
