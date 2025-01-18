const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const leagueRoutes = require('./routes/leagueRoutes');
const teamRoutes = require('./routes/teamRoutes');
const playerRoutes = require('./routes/playerRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const app = express();


app.use(express.json());


app.use('/api/leagues', leagueRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);


app.use(errorHandler);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

module.exports = app;
