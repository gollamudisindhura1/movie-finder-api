const express = require("express")
const router = express.Router()
const movieController = require("../controllers/movieController")


// Search movies

router.get("/search", movieController.searchMovies);

// Get movie details by IMDB Id

router.get("/movies/:id", movieController.getMovieDetails)

module.exports = {router}
