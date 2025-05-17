import { Router } from "express";
import { allUsers, validateToken } from '../controllers/users/read.js';
import register from '../controllers/users/create.js';
import update from "../controllers/users/update.js";
import deleteUser from "../controllers/users/delete.js";
import toggleActive from "../controllers/users/toggleActive.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import validator from "../middlewares/validator.js";
import schemaCreate from "../schemas/users/create.js";
import passport from "../middlewares/passport.js";
import onlyAdmin from "../middlewares/onlyAdmin.js";
import generateToken from "../middlewares/generateToken.js";

const usersRouter = Router();

// Obtener todos los usuarios (solo admin)
usersRouter.get("/allUsers", 
  passport.authenticate('jwt', { session: false }), 
  onlyAdmin, 
  allUsers
);

// Crear nuevo usuario
usersRouter.post('/create', 
  validator(schemaCreate), 
  accountExists, 
  createHash, 
  generateToken, 
  register
);

// Actualizar datos del usuario
usersRouter.put('/update', 
  createHash, 
  update
);

// Eliminar usuario (solo admin)
usersRouter.delete('/delete', 
  passport.authenticate('jwt', { session: false }), 
  onlyAdmin, 
  deleteUser
);

// Validar token
usersRouter.get('/validateToken', 
  passport.authenticate('jwt', { session: false }), 
  validateToken
);

// Activar o desactivar usuario (solo admin)
usersRouter.put('/:id', 
  passport.authenticate('jwt', { session: false }), 
  onlyAdmin, 
  toggleActive
);

export default usersRouter;
