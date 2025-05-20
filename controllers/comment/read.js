import Comment from "../../models/Comment.js";

let allComments = async (req, res, next) => {
    try {
        const {chapter_id} = req.query
        let query = {}

        if (chapter_id) {
            query.chapter_id = chapter_id
        }
        
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