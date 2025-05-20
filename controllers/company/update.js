import Company from "../../models/Company.js";

let update = async (req, res, next) => {
    try {
        let { _id, name, website, description, photo } = req.body;

        let companyInfo = {}
        if (name) companyInfo.name = name;
        if (website) companyInfo.website = website;
        if (description) companyInfo.description = description;
        if (photo) companyInfo.photo = photo;

        let updateCompany = await Company.findByIdAndUpdate(
            _id,
            companyInfo
        )
        return res.status(200).json({
            response: updateCompany
        })
        
    } catch (error) {
        next(error)
    }
}

let updateActive = async (req, res, next) => {
    try {
        let companyInfo = req.body
        let updateCompany = await Company.updateOne(
            {_id: companyInfo._id},
            {active: companyInfo.active}
        )
        res.status(200).json({
            response: updateCompany
        })
    } catch (error) {
        next(error)
    }
}

export {update, updateActive}