import Author from "../models/Author.js";
import Company from "../models/Company.js";

export default async (req, res, next) => {
    try {
        req.roleInfo = {}
        if(req.user.role === 1){
            const author = await Author.findOne({ user_id: req.user.id })
            console.log(req.user.role);
            if (author.active) 
                req.roleInfo.author = author
            else 
            req.user.role = 0
        }
        else if (req.user.role === 2){
            const company = await Company.findOne({ user_id: req.user.id })
            console.log(req.user.role);
            if (company.active)
                req.roleInfo.company = company
            else 
            req.user.role = 0
        }
        else if (req.user.role === 3)
            req.roleInfo.admin = "admin"
        next()
    } catch (error) {
        next(error)
    }
}