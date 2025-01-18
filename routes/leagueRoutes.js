const express = require('express');
const { getAllLeagues, getLeague, createLeague } = require('../controllers/leagueController');

const router = express.Router();


router.get('/', getAllLeagues);


router.get('/:id', getLeague);


router.post('/', createLeague);

module.exports = router;
