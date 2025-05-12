import Category from "../../models/Category.js";

let create = async (req,res,next) => {
    try {
        let categoryInfo = req.body
        console.log(categoryInfo)

        let createCategory = await Category.create(categoryInfo)
        return res.status(201).json({
            response: createCategory
        })
        
    } catch (error) {
        next(error)
    }
}

export default create