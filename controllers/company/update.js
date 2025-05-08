import Company from "../../models/Company.js";

let update = async (req, res, next) => {
    try {
        let { name, website, description, photo } = req.body;

        let companyInfo = {}
        if (website) companyInfo.website = website;
        if (description) companyInfo.description = description;
        if (photo) companyInfo.photo = photo;

        let updateCompany = await Company.updateOne(
            { name: name},
            { $set: companyInfo}
        )
        return res.status(200).json({
            response: updateCompany
        })
        
    } catch (error) {
        next(error)
    }
}

export default update