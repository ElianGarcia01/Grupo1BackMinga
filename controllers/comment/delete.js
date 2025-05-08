import Comment from "../../models/Comment.js";

let deleteComment = async (req,res,next) => {
    try {
        let deleteComment = await Comment.findByIdAndDelete(req.params.id)
        if (deleteComment) {
            return res.status(200).json({
                response: deleteComment
            })
        } else {
            return res.status(404).json({
                response: 'not found'
            })
        }
    } catch (error) {
        next(error)
    }
}

export default deleteComment