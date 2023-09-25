import express from "express";

// import controllers for home
import * as rabbitControllers from "../../controllers/apiControllers/Rabbit.js";

// define router
const rabbitRouter = express.Router();

// get route for data to be displayed when browser calls '/'
rabbitRouter.get("/list", rabbitControllers.getAllRabbits);
rabbitRouter.get("/:id", rabbitControllers.getRabbit);
rabbitRouter.post("/", rabbitControllers.postRabbit);
rabbitRouter.patch("/:id", rabbitControllers.updateRabbit);
rabbitRouter.put("/:id", rabbitControllers.updateRabbit);
rabbitRouter.delete("/:id", rabbitControllers.deleteRabbit);

export default rabbitRouter;