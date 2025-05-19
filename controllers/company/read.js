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

let active = async (req, res, next) => {
    try {
        let companies = await Company.find()
            .populate('user_id', 'email')
            .exec();
        let response = companies.map(company => ({
            id: company._id,
            name: company.name,           
            url: company.website,  
            active: company.active,
            photo: company.photo          
        }));

        return res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}    

export { allCompanies, active}