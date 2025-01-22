const express = require('express');
const { getAllLeagues, getLeague, createLeague, getLeaguesByTeams } = require('../controllers/leagueController');

const router = express.Router();


router.get('/', getAllLeagues);


router.get('/:id', getLeague);


router.post('/', createLeague);

router.get('/filter/teams', getLeaguesByTeams);

module.exports = router;
