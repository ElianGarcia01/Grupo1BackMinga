import Company from "../../models/Company.js";
import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let companyInfo = req.body
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const createCompany = await Company.create(companyInfo);
        req.body.user_id = req.user._id
        await User.findByIdAndUpdate(createCompany.user_id, {role : 2})

        return res.status(201).json({
            response: createCompany
        });

    } catch (error) {
        console.log(req.user);
        next(error)
    }
};

export default register;