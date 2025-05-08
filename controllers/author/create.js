import Author from "../../models/Author.js";
import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let authorInfo = req.body

        const user = await User.findById(authorInfo.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const createAuthor = await Author.create(authorInfo);
        return res.status(201).json({
            response: createAuthor
        });

    } catch (error) {
        next(error)
    }
};

export default register;
