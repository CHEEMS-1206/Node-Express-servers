import express from "express";

// import controllers for home
import * as catControllers from "../../controllers/apiControllers/Cat.js";

// define router
const catRouter = express.Router();

// get route for data to be displayed when browser calls '/'
catRouter.get("/list", catControllers.getAllCats);
catRouter.get("/:id", catControllers.getCat);
catRouter.post("/", catControllers.postCat);
catRouter.patch("/:id", catControllers.updateCat);
catRouter.put("/:id", catControllers.updateCat);
catRouter.delete("/:id", catControllers.deleteCat);

export default catRouter;
