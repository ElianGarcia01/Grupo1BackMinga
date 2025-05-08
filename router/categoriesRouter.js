import { Router } from "express";
import allCategories from "../controllers/category/read.js";
import create from "../controllers/category/create.js";
import update from "../controllers/category/update.js";
import deleteCategory from "../controllers/category/delete.js";

const categoriesRouter = Router()

categoriesRouter.get('/allCategories', allCategories)
categoriesRouter.post('/create', create)
categoriesRouter.post('/update', update)
categoriesRouter.delete('/delete', deleteCategory)

export default categoriesRouter