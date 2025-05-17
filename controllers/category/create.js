import Category from "../../models/Category.js";

let create = async (req,res,next) => {
    try {
        let categoryInfo = req.body
        let createCategory = await Category.create(categoryInfo)
        return res.status(201).json({
            response: createCategory
        })
        
    } catch (error) {
        next(error)
    }
}

export default create