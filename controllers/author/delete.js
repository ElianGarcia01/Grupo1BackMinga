import Author from "../../models/Author.js";
import User from "../../models/User.js";

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

        await Author.findByIdAndDelete(authorId);

        await User.findByIdAndUpdate(author.user_id, { role: 0 });

        return res.status(200).json({
            success: true,
            message: "Author deleted and user role updated to reader (0)",
        });

    } catch (error) {
        next(error);
    }
};

export default deleteAuthor;
