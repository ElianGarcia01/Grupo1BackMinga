import Company from "../../models/Company.js";
import User from "../../models/User.js";
import jwt from 'jsonwebtoken'

let deleteCompany = async (req, res, next) => {
    try {
        const companyId = req.params.id;

        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }
        await User.findByIdAndUpdate(company.user_id, { role: 0 });
        const updatedUser = await User.findById(company.user_id)
        const token = jwt.sign({
                email: updatedUser.email,
                photo: updatedUser.photo,
                role: updatedUser.role
            },
            process.env.ENCRYPTION,
            {expiresIn: "4h"})
        await Company.findByIdAndDelete(companyId);
        return res.status(200).json({
            success: true,
            message: "Company deleted and user role updated to reader (0)",
            token: token
        });

    } catch (error) {
        next(error);
    }
};

export default deleteCompany;