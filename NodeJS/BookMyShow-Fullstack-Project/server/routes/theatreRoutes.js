const express = require("express");
const {
  AddTheatreController,
  updateTheatreController,
  deleteTheatreController,
  getAllTheatresController,
  getAllTheatresByOwnerIdController,
} = require("../controllers/theatreController");

const theatreRouter = express.Router();

theatreRouter.post("/add-theatre", AddTheatreController);
theatreRouter.put("/update-theatre", updateTheatreController);
theatreRouter.delete("/delete-theatre/:theatreId", deleteTheatreController);
theatreRouter.get("/get-all-theatres", getAllTheatresController);
theatreRouter.get(
  "/get-all-theatres-by-owner/:ownerId",
  getAllTheatresByOwnerIdController
);

module.exports = theatreRouter;
