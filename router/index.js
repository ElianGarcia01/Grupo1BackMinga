import { Router } from "express";
import usersRouter from "./usersRouter.js";
import mangasRouter from "./mangasRouter.js";
import authorsRouter from "./authorsRouter.js";
import companiesRouter from "./companies.Router.js";
import categoriesRouter from "./categoriesRouter.js";
import chaptersRouter from "./chaptersRouter.js";
import commentsRouter from "./commentsRouter.js";
import reactionsRouter from "./reactionsRouter.js";

const routerIndex = Router()

routerIndex.use("/users", usersRouter)
routerIndex.use('/authors', authorsRouter)
routerIndex.use('/companies', companiesRouter)
routerIndex.use('/categories', categoriesRouter)
routerIndex.use('/mangas', mangasRouter)
routerIndex.use('/chapters', chaptersRouter)
routerIndex.use('/comments', commentsRouter)
routerIndex.use('/reactions', reactionsRouter)

export default routerIndex;