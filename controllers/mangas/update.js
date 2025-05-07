import Manga from "../../models/Manga.js";

let updateManga = async (req, res, next) => {
    try {
        let update = await Manga.updateOne(
            { _id: req.body._id},
            {
                author_id: req.body.author_id,
                company_id: req.body.company_id,
                title: req.body.title,
                cover_photo: req.body.cover_photo,
                description: req.body.description,
                category_id: req.body.category_id 
            }
        )
        return res.status(201).json({update})
    } catch (error) {
        next(error)
    }
}

export default updateManga