import express from "express";

// import controllers for home
import * as hamsterControllers from "../../controllers/apiControllers/Hamster.js";

// define router
const hamsterRouter = express.Router();

// get route for data to be displayed when browser calls '/'
hamsterRouter.get("/list", hamsterControllers.getAllHamsters);
hamsterRouter.get("/:id", hamsterControllers.getHamster);
hamsterRouter.post("/", hamsterControllers.postHamster);
hamsterRouter.patch("/:id", hamsterControllers.updateHamster);
hamsterRouter.put("/:id", hamsterControllers.updateHamster);
hamsterRouter.delete("/:id", hamsterControllers.deleteHamster);

export default hamsterRouter;