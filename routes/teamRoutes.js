const express = require('express');
const { getTeam, getTeamsByPlayers } = require('../controllers/teamController');

const router = express.Router();

router.get('/:id', getTeam); 
router.get('/filter/players', getTeamsByPlayers);
module.exports = router;
