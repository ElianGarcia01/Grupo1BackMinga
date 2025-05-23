import Comment from "../../models/Comment.js";

let update = async (req,res,next) => {
    try {
        let commentInfo = req.body
        console.log(commentInfo)
        let updateComment = await Comment.updateOne(
            {_id: commentInfo._id,},
            {message: commentInfo.message} 
        )
        return res.status(200).json({
            response: updateComment
        })   
    } catch (error) {
      next(error)  
    }
}

export default update