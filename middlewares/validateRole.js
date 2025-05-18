import Author from "../models/Author.js";
import Company from "../models/Company.js";

export default async (req, res, next) => {
    try {
        req.roleInfo = {}
        if(req.user.role === 1){
            const author = await Author.findOne({ user_id: req.user.id })
            if (author.active) 
                req.roleInfo.author = author
            else{
                return res.status(403).json({
                    success: false,
                    message: "Your user account is not active, please contact the page administrator."
                })
            }
        }
        else if (req.user.role === 2){
            const company = await Company.findOne({ user_id: req.user.id })
            if (company.active)
                req.roleInfo.company = company
            else{
                return res.status(403).json({
                    success: false,
                    message: "Your user account is not active, please contact the page administrator."
                })
            }
        }
        else if (req.user.role === 3)
            req.roleInfo.admin = "admin"
        next()
    } catch (error) {
        next(error)
    }
}