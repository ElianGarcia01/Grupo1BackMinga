import { Router } from "express";
import allReactions from "../controllers/reaction/read.js";
import createOrUpdate from "../controllers/reaction/createOrUpdate.js";
import deleteReaction from "../controllers/reaction/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreateReac from "../schemas/reactions/create.js"
import passport from "../middlewares/passport.js";
import authRole from "../middlewares/authRole.js"
import validateRole from "../middlewares/validateRole.js";

let reactionsRouter = Router()

reactionsRouter.get('/allReactions', passport.authenticate('jwt', {session: false}), allReactions)
reactionsRouter.post('/reaction', validator(schemaCreateReac), passport.authenticate('jwt', {session: false}), authRole, validateRole, createOrUpdate)
reactionsRouter.delete('/delete/:id', passport.authenticate('jwt', {session: false}), authRole, deleteReaction)

export default reactionsRouter