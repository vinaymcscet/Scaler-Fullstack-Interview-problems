const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    genre: { type: String, required: true },
    language: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    poster: { type: String, required: true },
})
console.log("movieSchema", movieSchema);

const Movie = mongoose.model("movies", movieSchema);
module.exports = Movie;