import Manga from "../../models/Manga.js"

let createManga = async (req, res, next) => {
    try {
        let create = await Manga.create(req.body)
        return res.status(201).json({
            response: create
        })
    } catch (error) {
        next(error)
    }
}

export default createManga