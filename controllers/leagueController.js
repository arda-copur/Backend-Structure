const League = require('../models/league');
const CustomError = require('../utils/CustomError');


const getAllLeagues = async (req, res, next) => {
  try {
    const leagues = await League.find().populate('teams');
    res.json(leagues);
  } catch (error) {
    next(error);
  }
};


const getLeague = async (req, res, next) => {
  try {
    const league = await League.findById(req.params.id).populate('teams');
    if (!league) {
      throw new CustomError('League not found', 404);
    }
    res.json(league);
  } catch (error) {
    next(error);
  }
};


const createLeague = async (req, res, next) => {
  try {
    const { name, teams } = req.body;
    const league = new League({ name, teams });
    await league.save();
    res.status(201).json(league);
  } catch (error) {
    next(error);
  }
};

const getLeaguesByTeams = async (req, res, next) => {
  try {
    const { teamIds } = req.query; 
    const leagues = await League.find({ teams: { $in: teamIds.split(',') } }).populate('teams');
    res.json(leagues);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllLeagues, getLeague, createLeague, getLeaguesByTeams };
