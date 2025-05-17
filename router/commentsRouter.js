import { Router } from "express";
import allComments from "../controllers/comment/read.js";
import create from "../controllers/comment/create.js";
import update from "../controllers/comment/update.js";
import deleteComment from "../controllers/comment/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreateComment from "../schemas/comments/create.js"
import schemaUpdateComment from "../schemas/comments/update.js"
import passport from "../middlewares/passport.js";
import authRole from "../middlewares/authRole.js";

let commentsRouter = Router()

commentsRouter.get('/allComments', allComments)
commentsRouter.post('/create',validator(schemaCreateComment), passport.authenticate('jwt', {session: false}), authRole, create)
commentsRouter.put('/update',validator(schemaUpdateComment), passport.authenticate('jwt', {session: false}), authRole, update)
commentsRouter.delete('/delete/:id', passport.authenticate('jwt', {session: false}), authRole, deleteComment)

export default commentsRouter