import Category from "../../models/Category.js";

let deleteCategory = async (req,res,next) => {
    try {
        let categoryInfo = req.body
        let deleteCategory = await Category.deleteOne(
            {_id : categoryInfo._id}
        )
        return res.status(200).json({
            response: deleteCategory
        })   
    } catch (error) {
      next(error)  
    }
}

export default deleteCategory