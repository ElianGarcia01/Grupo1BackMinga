import Comment from "../../models/Comment.js";

let allComments = async (req, res, next) => {
    try {
        let query = {}
        let all = await Comment.find(query)
        .populate('author_id', '')
        .populate('company_id', '')
        .exec()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allComments