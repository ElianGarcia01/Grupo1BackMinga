import Chapter from "../../models/Chapter.js";

let update = async (req, res, next) => {
    try {
            let { title, cover_photo, pages, order } = req.body;
    
            let chapterInfo = {}
            if (title) chapterInfo.title = title;
            if (cover_photo) chapterInfo.cover_photo = cover_photo;
            if (pages) chapterInfo.pages = pages;
            if (order) chapterInfo.order = order;
    
            let updateChapter = await Chapter.updateOne(
                { title: title},
                { $set: chapterInfo}
            )
            return res.status(200).json({
                response: updateChapter
            })
            
        } catch (error) {
            next(error)
        }
}

export default update