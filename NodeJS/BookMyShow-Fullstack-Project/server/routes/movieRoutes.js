const express = require("express");
const {
  deleteMovieController,
  updateMovieController,
  getAllMovieController,
  addMovieController,
  getMovieByIdController,
} = require("../controllers/movieController");

const movieRouter = express.Router();

const addMovieValidations = (req, res, next) => {
  const { title, description, duration, language, releaseDate, genre, poster } =
    req.body;

  try {
    if (
      !title ||
      !description ||
      !duration ||
      !language ||
      !releaseDate ||
      !genre ||
      !poster
    ) {
      return res
        .status(400)
        .json({ message: "Validation failed. All movie fields are required." });
    }
    next();
  } catch (err) {
    return res.send(500).send({ message: "Failed to validate movie input." });
  }
  next();
};

// add-movie
movieRouter.post("/add-movie", addMovieValidations, addMovieController);
movieRouter.get("/get-all-movies", getAllMovieController);
movieRouter.put("/update-movie", updateMovieController);
movieRouter.put("/delete-movie", deleteMovieController);
movieRouter.get("/movie/:id", getMovieByIdController);

module.exports = movieRouter;
