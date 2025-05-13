import Company from "../../models/Company.js";
import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let companyInfo = req.body

        const user = await User.findById(companyInfo.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const createCompany = await Company.create(companyInfo);

        await User.findByIdAndUpdate(createCompany.user_id, {role : 2})

        return res.status(201).json({
            response: createCompany
        });

    } catch (error) {
        next(error)
    }
};

export default register;