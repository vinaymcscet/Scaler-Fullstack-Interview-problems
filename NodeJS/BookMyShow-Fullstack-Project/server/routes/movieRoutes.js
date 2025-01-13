const express = require("express");
const {
  deleteMovieController,
  updateMovieController,
  getAllMovieController,
  addMovieController,
} = require("../controllers/movieController");

const movieRouter = express.Router();
// add-movie
movieRouter.post("/add-movie", addMovieController);
movieRouter.get("/get-all-movies", getAllMovieController);
movieRouter.put("/update-movie", updateMovieController);
movieRouter.put("/delete-movie", deleteMovieController);

module.exports = movieRouter;
