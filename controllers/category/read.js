import Category from "../../models/Category.js"

let allCategories = async (req, res, next) => {
    try {
        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }

        let all = await Category.find(query)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allCategories