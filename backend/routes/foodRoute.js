import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import upload from "../middleware/uploadFile.js";
const foodRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

foodRouter.get("/list", listFood);
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
