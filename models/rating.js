const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Rating = sequelize.define('Rating', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'ratings',
});

module.exports = Rating;
