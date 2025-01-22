const Player = require('../models/Player');
const CustomError = require('../utils/CustomError');


const getPlayer = async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      throw new CustomError('Player not found', 404);
    }
    res.json(player);
  } catch (error) {
    next(error);
  }
};

const getPlayersByNationality = async (req, res, next) => {
  try {
    const { nationality } = req.query; 
    const players = await Player.find({ nationality });
    res.json(players);
  } catch (error) {
    next(error);
  }
};

module.exports = { getPlayer, getPlayersByNationality };
