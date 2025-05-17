import { Router } from "express";
import Company from "../models/Company.js";
import allCompanies from "../controllers/company/read.js";
import register from "../controllers/company/create.js";
import update from "../controllers/company/update.js";
import deleteCompany from "../controllers/company/delete.js";
import validator from "../middlewares/validator.js";
import schemaRegisterComp from "../schemas/companies/create.js";
import schemaUpdateComp from "../schemas/companies/update.js";
import passport from "../middlewares/passport.js";
import onlyAdmin from "../middlewares/onlyAdmin.js";
import authRole from "../middlewares/authRole.js";

const companiesRouter = Router();

// Ruta pública para obtener compañías activas
companiesRouter.get('/active', async (req, res) => {
  try {
    const companies = await Company.find({ active: true });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas protegidas para administración
companiesRouter.get('/allCompanies', passport.authenticate('jwt', {session: false}), onlyAdmin, allCompanies);
companiesRouter.post('/register', validator(schemaRegisterComp), register);
companiesRouter.put('/update', validator(schemaUpdateComp), passport.authenticate('jwt', {session: false}), authRole, update);
companiesRouter.delete('/delete/:id', passport.authenticate('jwt', {session: false}), authRole, deleteCompany);

export default companiesRouter;
