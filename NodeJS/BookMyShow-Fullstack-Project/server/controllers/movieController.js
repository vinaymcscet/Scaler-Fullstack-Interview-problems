const Movie = require("../models/movieModel");

const addMovieController = async(req, res) => {
    try {
        const newMovie = await Movie(req.body);
        await newMovie.save();
        res.send({
            message: "Movie added successfully",
            success: true
        })
    } catch(err) {
        console.log(err);
        res.send({
            message: "Failed to add movie",
            success: false
        })
    }
}

const getAllMovieController = async(req, res) => {
    try {
        const allMovies = await Movie.find();
        res.send({
            message: "Movie fetched successfully",
            success: true,
            data: allMovies,
        })
    } catch(err) {
        res.send({
            message: "Failed to fetched movie",
            success: false
        })
    }
}

const updateMovieController = async(req, res) => {
    try {
        await Movie.findByIdAndUpdate(req.body.movieId, req.body);
        res.send({
            message: "Movie updated successfully",
            success: true,
        })
    } catch(err) {
        console.log(err);
        res.send({
            message: "Failed to update movie",
            success: false
        })
    }
}

const deleteMovieController = async(req, res) => {
    try {
        await Movie.findByIdAndDelete(req.body.movieId);
        console.log(req.body.movieId);
        res.send({
            message: "Movie deleted successfully",
            success: true,
        })
    } catch(err) {
        console.log(err);
        res.send({
            message: "Failed to delete movie",
            success: false
        })
    }
}

module.exports = { addMovieController, updateMovieController, getAllMovieController, deleteMovieController };