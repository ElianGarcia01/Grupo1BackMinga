import { Router } from "express"
import allManga from "../controllers/mangas/read.js"
import createManga from "../controllers/mangas/create.js"
import updateManga from "../controllers/mangas/update.js"
import deleteManga from "../controllers/mangas/delete.js"

const mangasRouter = Router()

mangasRouter.get('/allMangas', allManga)
mangasRouter.post('/create', createManga)
mangasRouter.put('/update', updateManga)
mangasRouter.delete('/delete', deleteManga)

export default mangasRouter
