import express from "express";

// import controllers for home
import * as birdControllers from "../../controllers/apiControllers/Bird.js";

// define router
const birdRouter = express.Router();

// get route for data to be displayed when browser calls '/'
birdRouter.get("/list", birdControllers.getAllBirds);
birdRouter.get("/:id", birdControllers.getBird);
birdRouter.post("/", birdControllers.postBird);
birdRouter.patch("/:id", birdControllers.updateBird);
birdRouter.put("/:id", birdControllers.updateBird);
birdRouter.delete("/:id", birdControllers.deleteBird);

export default birdRouter;
