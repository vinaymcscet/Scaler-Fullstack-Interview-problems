const Show = require("../models/showModel");

const addShowController = async(req, res) => {
    try {
        const newShow = new Show(req.body);
        await newShow.save();
        res.send({
            success: true,
            message: "New Show has been added!"
        })
    } catch {
        res.send({
            status: false,
            message: err.message,
        })
    }
}

const deleteShowController = async(req, res) => {
    try {
        const showId = req.params.showId;
        await Show.findByIdAndDelete(showId);
        res.send({
            success: true,
            message: "The Show has been deleted!"
        })
    } catch {
        res.send({
            status: false,
            message: err.message,
        })
    }
}

const updateShowController = async(req, res) => {
    try {
        await Show.findByIdAndUpdate(req.body.showId, req.body);
        res.send({
            success: true,
            message: "The Show has been updated!"
        })
    } catch {
        res.send({
            status: false,
            message: err.message,
        })
    }
}

const getAllShowsByTheatreController = async(req, res) => {
    try {
        const shows = await Show.find({ theatre: req.body.theatreId }).populate("movie");
        res.send({
            success: true,
            message: "All shows are fetched!",
            data: shows,
        })
    } catch(err) {
        res.send({
            status: false,
            message: err.message,
        })
    }
}

const getAllTheatresByMovieController = async(req, res) => {
    try {
        const { movie, date } = req.body;
        const shows = await Show.find({ movie, date }).populate("theatre");
        console.log("shows", shows);
        
        const uniqueTheatre = [];
        shows.forEach((show) => {
            let isTheatre = uniqueTheatre.find(theatre => (theatre.id = show.theatre._id));
            if(!isTheatre) {
                let showsOfThisTheatres = shows.filter(showObj => showObj.theatre._id = show.theatre._id);
                uniqueTheatre.push({
                    ...show.theatre._doc,
                    showsOfThisTheatres,
                })
            }
        })
        res.send({
            success: true,
            message: "All Theatres are fetched",
            data: uniqueTheatre
        })
    } catch(err) {
        console.log("err", err);
        res.send({
            status: false,
            message: err.message,
        })
    }
}

const getShowByIdController = async(req, res) => {
    try {
        const shows = await Show.findById(req.body.showId).populate("movie").populate("theatre");
        res.send({
            success: true,
            message: "All shows are fetched",
            data: shows,
        })
    } catch(err) {
        res.send({
            success: false,
            message: err.message,
        })
    }
}

module.exports = {
    addShowController,
    deleteShowController,
    updateShowController,
    getAllShowsByTheatreController,
    getAllTheatresByMovieController,
    getShowByIdController
}