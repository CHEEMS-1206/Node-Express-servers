import express from "express";

// import controllers for dog
import * as dogControllers from "../../controllers/apiControllers/Dog.js";

// define router
const dogRouter = express.Router();

// get route for data to be displayed when browser calls '/'
dogRouter.get("/list", dogControllers.getAllDogs);
dogRouter.get("/:id", dogControllers.getDog);
dogRouter.post("/", dogControllers.postDog);
dogRouter.patch("/:id", dogControllers.updateDog);
dogRouter.put("/:id", dogControllers.updateDog);
dogRouter.delete("/:id", dogControllers.deleteDog);

export default dogRouter;
