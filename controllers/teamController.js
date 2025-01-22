const Team = require('../models/Team');
const CustomError = require('../utils/CustomError');


const getTeam = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id).populate('players');
    if (!team) {
      throw new CustomError('Team not found', 404);
    }
    res.json(team);
  } catch (error) {
    next(error);
  }
};

const getTeamsByPlayers = async (req, res, next) => {
  try {
    const { playerIds } = req.query; 
    const teams = await Team.find({ players: { $in: playerIds.split(',') } }).populate('players');
    res.json(teams);
  } catch (error) {
    next(error);
  }
};

module.exports = { getTeam, getTeamsByPlayers };
