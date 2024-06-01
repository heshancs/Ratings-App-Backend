const express = require('express');
const { createRating, getRatings, getAverageRating } = require('../controllers/ratingController');
const router = express.Router();

router.post('/rating', createRating);
router.get('/ratings', getRatings);
router.get('/average-rating', getAverageRating);

module.exports = router;
