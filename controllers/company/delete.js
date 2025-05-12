import Company from "../../models/Company.js";
import User from "../../models/User.js";

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

        await Company.findByIdAndDelete(companyId);

        await User.findByIdAndUpdate(company.user_id, { role: 0 });

        return res.status(200).json({
            success: true,
            message: "Company deleted and user role updated to reader (0)",
        });

    } catch (error) {
        next(error);
    }
};

export default deleteCompany;