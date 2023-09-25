import express from "express";

// import controllers for home
import * as fishControllers from "../../controllers/apiControllers/Fishes.js";

// define router
const fishRouter = express.Router();

// get route for data to be displayed when browser calls '/'
fishRouter.get("/list", fishControllers.getAllFishes);
fishRouter.get("/:id", fishControllers.getFish);
fishRouter.post("/", fishControllers.postFish);
fishRouter.patch("/:id", fishControllers.updateFish);
fishRouter.put("/:id", fishControllers.updateFish);
fishRouter.delete("/:id", fishControllers.deleteFish);

export default fishRouter;
