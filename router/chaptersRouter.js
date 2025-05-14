import { Router } from "express";
import allChapters from "../controllers/chapter/read.js";
import register from "../controllers/chapter/create.js";
import update from "../controllers/chapter/update.js";
import deleteChapter from "../controllers/chapter/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreateChap from "../schemas/chapters/create.js"
import schemaUpdateChap from "../schemas/chapters/update.js"
import passport from "../middlewares/passport.js";
import authRole from "../middlewares/authRole.js";


let chaptersRouter = Router()

chaptersRouter.get('/allChapters', allChapters)
chaptersRouter.post('/register',validator(schemaCreateChap), passport.authenticate('jwt', {session: false}), authRole, register)
chaptersRouter.put('/update',validator(schemaUpdateChap), passport.authenticate('jwt', {session: false}), authRole, update)
chaptersRouter.delete('/delete', passport.authenticate('jwt', {session: false}), authRole,deleteChapter)

export default chaptersRouter