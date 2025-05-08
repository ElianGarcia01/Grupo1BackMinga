import Author from "../../models/Author.js";

let deleteAuthor = async (req,res,next) => {
    try {
        let authorInfo = req.body
        console.log(authorInfo)
        let deleteAuthor = await Author.deleteOne(
            {name : authorInfo.name}
        )
        return res.status(200).json({
            response: deleteAuthor
        })   
    } catch (error) {
      next(error)  
    }
}

export default deleteAuthor