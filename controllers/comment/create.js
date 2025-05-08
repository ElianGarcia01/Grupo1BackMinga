import Comment from "../../models/Comment.js";

let create = async (req,res,next) => {
    try {
        let commentInfo = req.body
        console.log(commentInfo)

        let createComment = await Comment.create(commentInfo)
        return res.status(201).json({
            response: createComment
        })
        
    } catch (error) {
        next(error)
    }
}

export default create