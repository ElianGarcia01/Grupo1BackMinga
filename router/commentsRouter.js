import { Router } from "express";
import allComments from "../controllers/comment/read.js";
import create from "../controllers/comment/create.js";
import update from "../controllers/comment/update.js";
import deleteComment from "../controllers/comment/delete.js";

let commentsRouter = Router()

commentsRouter.get('/allComments', allComments)
commentsRouter.post('/create', create)
commentsRouter.post('/update', update)
commentsRouter.delete('/delete', deleteComment)

export default commentsRouter