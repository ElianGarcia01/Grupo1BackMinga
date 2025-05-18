import { Router } from "express"
import allManga from "../controllers/mangas/read.js"
import createManga from "../controllers/mangas/create.js"
import updateManga from "../controllers/mangas/update.js"
import deleteManga from "../controllers/mangas/delete.js"
import validator from "../middlewares/validator.js"
import schemaCreateManga from "../schemas/mangas/create.js"
import schemaUpdateManga from "../schemas/mangas/update.js"
import passport from "../middlewares/passport.js"
import authRole from "../middlewares/authRole.js"

const mangasRouter = Router()

mangasRouter.get('/allMangas', passport.authenticate('jwt', {session: false}), allManga)
mangasRouter.post('/create',validator(schemaCreateManga), passport.authenticate('jwt', {session: false}), authRole, createManga)
mangasRouter.put('/update',validator(schemaUpdateManga), passport.authenticate('jwt', {session: false}), authRole, updateManga)
mangasRouter.delete('/delete', passport.authenticate('jwt', {session: false}), authRole, deleteManga)

export default mangasRouter
