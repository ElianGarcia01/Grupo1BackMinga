import Category from "../../models/Category.js";

let deleteCategory = async (req,res,next) => {
    try {
        let categoryInfo = req.body
        console.log(categoryInfo)
        let deleteCategory = await Category.deleteOne(
            {name : categoryInfo.name}
        )
        return res.status(200).json({
            response: deleteCategory
        })   
    } catch (error) {
      next(error)  
    }
}

export default deleteCategory