import Author from "../../models/Author.js";
import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let user = await User.findById(req.user._id)
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
        req.body.user_id = req.user._id;
        const createAuthor = await Author.create(req.body);
        user = await User.findByIdAndUpdate(createAuthor.user_id, { role: 1 });
        return res.status(201).json({
            response: createAuthor,
        });
    } catch (error) {
        next(error);
    }
};

export default register;
