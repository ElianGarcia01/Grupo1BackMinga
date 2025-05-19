import Manga from "../../models/Manga.js"

let createManga = async (req, res, next) => {
    try {
        if (req.roleInfo.author) req.body.author_id = req.roleInfo.author._id;
        if (req.roleInfo.company) req.body.company_id = req.roleInfo.company._id;
        let create = await Manga.create(req.body)
        return res.status(201).json({
            response: create
        })
    } catch (error) {
        next(error)
    }
}

export default createManga