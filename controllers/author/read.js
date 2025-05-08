import Author from "../../models/Author.js"

let allAuthors = async (req, res, next) => {
    try {
        let queryParams = req.query
        let {name, lastName} = req.query
        let query = {}

        if (name) {
           query.name = {$regex: name, $options: 'i'} 
        }
        if (lastName) {
            query.lastName = {$regex: name, $options: 'i'} 
         }
         let all = await Author.find(query).populate('user_id', ''). exec()
         return res.status(200).json({
            response: all
         })
    } catch (error) {
        next(error)
    }
}

export default allAuthors