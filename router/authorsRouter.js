import { Router } from "express";
import allAuthors from "../controllers/author/read.js";
import register from "../controllers/author/create.js";
import update from "../controllers/author/update.js";
import deleteAuthor from "../controllers/author/delete.js";

const authorsRouter = Router()

authorsRouter.get('/allAuthors', allAuthors)
authorsRouter.post('/register', register)
authorsRouter.post('/update', update)
authorsRouter.delete('/delete', deleteAuthor)

export default authorsRouter