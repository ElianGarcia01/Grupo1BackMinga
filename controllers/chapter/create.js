import Chapter from "../../models/Chapter.js";

let register = async (req, res, next) => {
    try {
        let chapterInfo = req.body
        console.log(chapterInfo)

        let createChapter = await Chapter.create(chapterInfo)
        return res.status(201).json({
            response: createChapter
        })
        
    } catch (error) {
        next(error)
    }
}

export default register