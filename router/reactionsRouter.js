import { Router } from "express";
import allReactions from "../controllers/reaction/read.js";
import create from "../controllers/reaction/create.js";
import update from "../controllers/reaction/update.js";
import deleteReaction from "../controllers/reaction/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreateReac from "../schemas/reactions/create.js"
import schemaUpdateReac from "../schemas/reactions/update.js"

let reactionsRouter = Router()

reactionsRouter.get('/allReactions', allReactions)
reactionsRouter.post('/create',validator(schemaCreateReac), create)
reactionsRouter.post('/update/:id',validator(schemaUpdateReac), update)
reactionsRouter.delete('/delete/:id', deleteReaction)

export default reactionsRouter