import { Router } from "express";
import allAuthors from "../controllers/author/read.js";
import register from "../controllers/author/create.js";
import update from "../controllers/author/update.js";
import deleteAuthor from "../controllers/author/delete.js";
import validator from "../middlewares/validator.js"
import schemaRegisterAuthor from "../schemas/authors/create.js"
import schemaUpdateAuthor from "../schemas/authors/update.js"

const authorsRouter = Router()

authorsRouter.get('/allAuthors', allAuthors)
authorsRouter.post('/register',validator(schemaRegisterAuthor), register)
authorsRouter.put('/update',validator(schemaUpdateAuthor), update)
authorsRouter.delete('/delete/:id', deleteAuthor)

export default authorsRouter