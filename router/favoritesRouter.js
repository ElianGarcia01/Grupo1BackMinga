import { Router } from "express";
import passport from "../middlewares/passport.js";
import authRole from "../middlewares/authRole.js";
import byUser from "../controllers/favorite/read.js";
import createFavorite from "../controllers/favorite/create.js";
import deleteFavorite from "../controllers/favorite/delete.js";
import updateFavorite from "../controllers/favorite/update.js";
import validateRole from "../middlewares/validateRole.js";

const favoritesRouter = Router()

favoritesRouter.get('/byUser', passport.authenticate('jwt', {session: false}), authRole, byUser)
favoritesRouter.post('/create', passport.authenticate('jwt', {session: false}), authRole, createFavorite)
favoritesRouter.delete('/delete', passport.authenticate('jwt', {session: false}), authRole, validateRole, deleteFavorite)
favoritesRouter.put('/update', passport.authenticate('jwt', {session: false}), authRole, updateFavorite)

export default favoritesRouter