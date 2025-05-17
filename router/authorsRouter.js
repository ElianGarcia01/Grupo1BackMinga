import { Router } from "express";
import Author from "../models/Author.js";
import allAuthors from "../controllers/author/read.js";
import register from "../controllers/author/create.js";
import update from "../controllers/author/update.js";
import deleteAuthor from "../controllers/author/delete.js";
import validator from "../middlewares/validator.js";
import schemaRegisterAuthor from "../schemas/authors/create.js";
import schemaUpdateAuthor from "../schemas/authors/update.js";
import passport from "../middlewares/passport.js";
import onlyAdmin from "../middlewares/onlyAdmin.js";
import authRole from "../middlewares/authRole.js";

const authorsRouter = Router();

// Ruta pública para obtener autores activos
authorsRouter.get('/active', async (req, res) => {
  try {
    const authors = await Author.find({ active: true });
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas protegidas para administración
authorsRouter.get('/allAuthors', passport.authenticate('jwt', {session: false}), onlyAdmin, allAuthors);
authorsRouter.post('/register', validator(schemaRegisterAuthor), register);
authorsRouter.put('/update', validator(schemaUpdateAuthor), passport.authenticate('jwt', {session: false}), authRole, update);
authorsRouter.delete('/delete/:id', passport.authenticate('jwt', {session: false}), authRole, deleteAuthor);

export default authorsRouter;
