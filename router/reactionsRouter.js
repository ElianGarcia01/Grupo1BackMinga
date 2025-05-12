import { Router } from "express";
import allReactions from "../controllers/reaction/read.js";
import createOrUpdate from "../controllers/reaction/createOrUpdate.js";
import deleteReaction from "../controllers/reaction/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreateReac from "../schemas/reactions/create.js"

let reactionsRouter = Router()

reactionsRouter.get('/allReactions', allReactions)
reactionsRouter.post('/reaction',validator(schemaCreateReac), createOrUpdate)
reactionsRouter.delete('/delete/:id', deleteReaction)

export default reactionsRouter