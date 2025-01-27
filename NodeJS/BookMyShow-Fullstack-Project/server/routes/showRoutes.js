const express = require("express");
const { addShowController, deleteShowController, updateShowController, getAllShowsByTheatreController, getAllTheatresByMovieController, getShowByIdController } = require("../controllers/showController");
const showRouter = express.Router();

showRouter.post('/addShow', addShowController);
showRouter.delete('/deleteShow', deleteShowController);
showRouter.patch('/updateShow', updateShowController);
showRouter.post('/getAllShowsByTheatre', getAllShowsByTheatreController);
showRouter.post('/getAllTheatersByMovie', getAllTheatresByMovieController);
showRouter.post('/getShowById', getShowByIdController); 

module.exports = showRouter;