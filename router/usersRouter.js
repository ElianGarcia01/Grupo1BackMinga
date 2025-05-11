import { Router } from "express";
import allUsers from '../controllers/users/read.js'
import register from '../controllers/users/create.js'
import update from "../controllers/users/update.js"
import deleteUser from "../controllers/users/delete.js";
import accountExists from "../middlewares/accountExists.js"
import createHash from "../middlewares/createHash.js"


const usersRouter = Router()

usersRouter.get("/allUsers", allUsers)
usersRouter.post('/create', accountExists, createHash, register)
usersRouter.put('/update', createHash, update)
usersRouter.delete('/delete', deleteUser)

export default usersRouter