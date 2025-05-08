import { Router } from "express";
import allReactions from "../controllers/reaction/read.js";

let reactionsRouter = Router()

reactionsRouter.get('/allReactions', allReactions)

export default reactionsRouter