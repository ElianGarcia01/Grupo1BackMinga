import Company from "../../models/Company.js";

let allCompanies = async (req, res, next) => {
    try {
        let {name} = req.query
        let query = {}

        if (name) {
           query.name = {$regex: name, $options: 'i'} 
        }
         let all = await Company.find(query).populate('user_id', 'name'). exec()
         return res.status(200).json({
            response: all
         })
    } catch (error) {
        next(error)
    }
}

export default allCompanies