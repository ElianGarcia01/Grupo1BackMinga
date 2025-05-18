import Company from "../../models/Company.js";
import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        if (user.role !== 0 ){
            return res.status(403).json({
                success: false,
                message: "The user is authenticated but does not have permission"
            });
        }
        console.log("llego hasta aquí");
        req.body.user_id = req.user._id
        const createCompany = await Company.create(req.body);
        user = await User.findByIdAndUpdate(createCompany.user_id, {role : 2})
        return res.status(201).json({
            response: createCompany
        });
    } catch (error) {
        next(error)
    }
};

export default register;