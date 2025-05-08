import { Router } from "express";
import allUsers from '../controllers/users/read.js'
import register from '../controllers/users/create.js'
import update from "../controllers/users/update.js"
import deleteUser from "../controllers/users/delete.js";


const usersRouter = Router()

usersRouter.get("/allUsers", allUsers)
usersRouter.post('/create', register)
usersRouter.put('/update', update)
usersRouter.delete('/delete', deleteUser)

export default usersRouter