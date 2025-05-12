import { Router } from "express";
import allCategories from "../controllers/category/read.js";
import create from "../controllers/category/create.js";
import update from "../controllers/category/update.js";
import deleteCategory from "../controllers/category/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreateCat from "../schemas/categories/create.js"
import schemaUpdateCat from "../schemas/categories/update.js"

const categoriesRouter = Router()

categoriesRouter.get('/allCategories', allCategories)
categoriesRouter.post('/create',validator(schemaCreateCat), create)
categoriesRouter.put('/update',validator(schemaUpdateCat), update)
categoriesRouter.delete('/delete', deleteCategory)

export default categoriesRouter