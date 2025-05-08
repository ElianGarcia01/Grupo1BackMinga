import { Router } from "express"
import allCompanies from "../controllers/company/read.js"
import register from "../controllers/company/create.js"
import update from "../controllers/company/update.js"
import deleteCompany from "../controllers/company/delete.js"

const companiesRouter = Router()

companiesRouter.get('/allCompanies', allCompanies)
companiesRouter.post('/register', register)
companiesRouter.post('/update', update)
companiesRouter.delete('/delete', deleteCompany)

export default companiesRouter

