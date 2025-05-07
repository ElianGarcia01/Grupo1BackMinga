import { Router } from "express";
import usersRouter from "./usersRouter.js";
import mangasRouter from "./mangasRouter.js";


const routerIndex = Router()

routerIndex.use("/users", usersRouter)
routerIndex.use('/mangas', mangasRouter)

export default routerIndex;