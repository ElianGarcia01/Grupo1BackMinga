import Chapter from "../../models/Chapter.js";

let deleteChapter = async (req,res,next) => {
    try {
        let chapterInfo = req.body
        console.log(chapterInfo)
        let deleteChapter = await Chapter.deleteOne(
            {_id : chapterInfo._id}
        )
        return res.status(200).json({
            response: deleteChapter
        })   
    } catch (error) {
      next(error)  
    }
}

export default deleteChapter