import { Router } from "express";
import allReactions from "../controllers/reaction/read.js";
import create from "../controllers/reaction/create.js";
import update from "../controllers/reaction/update.js";
import deleteReaction from "../controllers/reaction/delete.js";

let reactionsRouter = Router()

reactionsRouter.get('/allReactions', allReactions)
reactionsRouter.post('/create', create)
reactionsRouter.post('/update/:id', update)
reactionsRouter.delete('/delete/:id', deleteReaction)

export default reactionsRouter