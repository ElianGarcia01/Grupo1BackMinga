import { Router } from "express";
import allChapters from "../controllers/chapter/read.js";
import register from "../controllers/chapter/create.js";
import update from "../controllers/chapter/update.js";
import deleteChapter from "../controllers/chapter/delete.js";


let chaptersRouter = Router()

chaptersRouter.get('/allChapters', allChapters)
chaptersRouter.post('/register', register)
chaptersRouter.post('/update', update)
chaptersRouter.delete('/delete', deleteChapter)

export default chaptersRouter