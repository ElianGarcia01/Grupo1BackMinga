import { Router } from "express"
import allCompanies from "../controllers/company/read.js"
import register from "../controllers/company/create.js"
import update from "../controllers/company/update.js"
import deleteCompany from "../controllers/company/delete.js"
import validator from "../middlewares/validator.js"
import schemaRegisterComp from "../schemas/companies/create.js"
import schemaUpdateComp from "../schemas/companies/update.js"
import passport from "../middlewares/passport.js"
import onlyAdmin from "../middlewares/onlyAdmin.js"
import authRole from "../middlewares/authRole.js"

const companiesRouter = Router()

companiesRouter.get('/allCompanies', passport.authenticate('jwt', {session: false}), onlyAdmin, allCompanies)
companiesRouter.post('/register',validator(schemaRegisterComp), passport.authenticate('jwt', {session: false}), register)
companiesRouter.put('/update',validator(schemaUpdateComp), passport.authenticate('jwt', {session: false}), authRole, update)
companiesRouter.delete('/delete/:id', passport.authenticate('jwt', {session: false}), authRole, deleteCompany)

export default companiesRouter

