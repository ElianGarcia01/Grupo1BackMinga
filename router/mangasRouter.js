import { Router } from "express"
import allManga from "../controllers/mangas/read.js"
import createManga from "../controllers/mangas/create.js"
import updateManga from "../controllers/mangas/update.js"
import deleteManga from "../controllers/mangas/delete.js"
import validator from "../middlewares/validator.js"
import schemaCreateManga from "../schemas/mangas/create.js"
import schemaUpdateManga from "../schemas/mangas/update.js"

const mangasRouter = Router()

mangasRouter.get('/allMangas', allManga)
mangasRouter.post('/create',validator(schemaCreateManga), createManga)
mangasRouter.put('/update',validator(schemaUpdateManga), updateManga)
mangasRouter.delete('/delete', deleteManga)

export default mangasRouter
