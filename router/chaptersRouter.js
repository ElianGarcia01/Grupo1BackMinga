import { Router } from "express";
import allChapters from "../controllers/chapter/read.js";
import register from "../controllers/chapter/create.js";
import update from "../controllers/chapter/update.js";
import deleteChapter from "../controllers/chapter/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreateChap from "../schemas/chapters/create.js"
import schemaUpdateChap from "../schemas/chapters/update.js"


let chaptersRouter = Router()

chaptersRouter.get('/allChapters', allChapters)
chaptersRouter.post('/register',validator(schemaCreateChap), register)
chaptersRouter.post('/update',validator(schemaUpdateChap), update)
chaptersRouter.delete('/delete', deleteChapter)

export default chaptersRouter