import { Router } from "express";
import { allAuthors, active } from "../controllers/author/read.js";
import register from "../controllers/author/create.js";
import {update, updateActive} from "../controllers/author/update.js";
import deleteAuthor from "../controllers/author/delete.js";
import validator from "../middlewares/validator.js"
import schemaRegisterAuthor from "../schemas/authors/create.js"
import schemaUpdateAuthor from "../schemas/authors/update.js"
import passport from "../middlewares/passport.js";
import onlyAdmin from "../middlewares/onlyAdmin.js";
import authRole from "../middlewares/authRole.js";

const authorsRouter = Router()

authorsRouter.get('/allAuthors', passport.authenticate('jwt', {session: false}), onlyAdmin, allAuthors)
authorsRouter.post('/register',validator(schemaRegisterAuthor), passport.authenticate('jwt', {session: false}), register)
authorsRouter.put('/update', passport.authenticate('jwt', {session: false}), authRole, update)
authorsRouter.delete('/delete/:id', passport.authenticate('jwt', {session: false}), authRole, deleteAuthor)
authorsRouter.get('/active', passport.authenticate('jwt', {session: false}), onlyAdmin, active )
authorsRouter.put("/updateActive", passport.authenticate('jwt', {session: false}), onlyAdmin, updateActive)

export default authorsRouter