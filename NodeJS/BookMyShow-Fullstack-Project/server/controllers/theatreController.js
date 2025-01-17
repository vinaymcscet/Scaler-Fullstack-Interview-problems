const Theatre = require("../models/theatreModel");

const AddTheatreController = async (req, res) => {
  try {
    console.log("adding theatre", req.body);
    const newTheatre = new Theatre(req.body);
    await newTheatre.save();
    // if(process.env.NODE_ENV === "production"){
    //     console.log("Theatre added successfully
    // }else{
    //     console.log("Theatre added successfully", newTheatre);
    // }
    res.send({
      success: true,
      message: "Theatre added successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updateTheatreController = async (req, res) => {
  try {
    const theatre = await Theatre.findById(req.body.theatreId);
    if (!theatre) {
      res.send(404).json({ success: false, message: "Theatre not found" });
    }
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
    res.send({
      success: true,
      message: "Theatre updated successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deleteTheatreController = async (req, res) => {
  try {
    console.log(req.params.theatreId);
    await Theatre.findByIdAndDelete(req.params.theatreId);
    res.send({
      success: true,
      message: "Theatre deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAllTheatresController = async (req, res) => {
  try {
    const allTheatres = await Theatre.find().populate("owner");
    res.send({
      success: true,
      theatres: allTheatres,
      data: allTheatres,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAllTheatresByOwnerIdController = async (req, res) => {
  try {
    const allTheatres = await Theatre.find({ owner: req.params.ownerId });
    res.send({
      success: true,
      theatres: allTheatres,
      data: allTheatres,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  AddTheatreController,
  updateTheatreController,
  deleteTheatreController,
  getAllTheatresController,
  getAllTheatresByOwnerIdController,
};
