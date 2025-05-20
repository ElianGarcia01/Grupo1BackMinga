import Author from "../../models/Author.js";
import User from "../../models/User.js";
import jwt from 'jsonwebtoken'

let deleteAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.id;

        const author = await Author.findById(authorId);
        if (!author) {
            return res.status(404).json({
                success: false, 
                message: "Author not found",
            });
        }
        await User.findByIdAndUpdate(author.user_id, { role: 0 });
        const updatedUser = await User.findById(company.user_id)
        const token = jwt.sign({
                email: updatedUser.email,
                photo: updatedUser.photo,
                role: updatedUser.role
            },
            process.env.ENCRYPTION,
            {expiresIn: "4h"})
        await Author.findByIdAndDelete(authorId);
        return res.status(200).json({
            success: true,
            message: "Author deleted and user role updated to reader (0)",
            token: token
        });

    } catch (error) {
        next(error);
    }
};

export default deleteAuthor;
