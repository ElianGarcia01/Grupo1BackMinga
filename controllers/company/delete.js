import Company from "../../models/Company.js";

let deleteCompany = async (req,res,next) => {
    try {
        let companyInfo = req.body
        console.log(companyInfo)
        let deleteCompany = await Company.deleteOne(
            {name : companyInfo.name}
        )
        return res.status(200).json({
            response: deleteCompany
        })   
    } catch (error) {
      next(error)  
    }
}

export default deleteCompany