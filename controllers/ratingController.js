const Rating = require('../models/rating');
const sequelize = require('../sequelize');

exports.createRating = async (req, res) => {
  const { rating, comment } = req.body;
  try {
    const newRating = await Rating.create({ rating, comment });
    res.json(newRating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRatings = async (req, res) => {
  const { sortOrder = 'created_at' } = req.query;
  let order;
  if (sortOrder === 'lowToHigh') {
    order = [['rating', 'ASC']];
  } else if (sortOrder === 'highToLow') {
    order = [['rating', 'DESC']];
  } else {
    order = [['created_at', 'DESC']];
  }

  try {
    const ratings = await Rating.findAll({ order });
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAverageRating = async (req, res) => {
  try {
    const averageRating = await Rating.findOne({
      attributes: [[sequelize.fn('AVG', sequelize.col('rating')), 'avg']],
    });
    res.json(averageRating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
