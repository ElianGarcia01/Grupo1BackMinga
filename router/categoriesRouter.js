import { Router } from "express";
import allCategories from "../controllers/category/read.js";
import create from "../controllers/category/create.js";
import update from "../controllers/category/update.js";
import deleteCategory from "../controllers/category/delete.js";
import validator from "../middlewares/validator.js";
import schemaCreateCat from "../schemas/categories/create.js"
import schemaUpdateCat from "../schemas/categories/update.js"
import passport from "../middlewares/passport.js";
import onlyAdmin from "../middlewares/onlyAdmin.js";

const categoriesRouter = Router()

categoriesRouter.get('/allCategories', allCategories)
categoriesRouter.post('/create',validator(schemaCreateCat),passport.authenticate('jwt', {session:false}), onlyAdmin, create)
categoriesRouter.put('/update',validator(schemaUpdateCat),passport.authenticate('jwt', {session:false}), onlyAdmin, update)
categoriesRouter.delete('/delete',passport.authenticate('jwt', {session:false}), onlyAdmin, deleteCategory)

export default categoriesRouter