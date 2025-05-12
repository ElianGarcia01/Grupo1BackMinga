import { Router } from "express"
import allCompanies from "../controllers/company/read.js"
import register from "../controllers/company/create.js"
import update from "../controllers/company/update.js"
import deleteCompany from "../controllers/company/delete.js"
import validator from "../middlewares/validator.js"
import schemaRegisterComp from "../schemas/companies/create.js"
import schemaUpdateComp from "../schemas/companies/update.js"

const companiesRouter = Router()

companiesRouter.get('/allCompanies', allCompanies)
companiesRouter.post('/register',validator(schemaRegisterComp), register)
companiesRouter.put('/update',validator(schemaUpdateComp), update)
companiesRouter.delete('/delete/:id', deleteCompany)

export default companiesRouter

