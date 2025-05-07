import Manga from "../../models/Manga.js";

let deleteManga = async (req, res, next) => {
    try {
        let deleteManga = await Manga.findOneAndDelete({ _id: req.body._id })
        deleteManga ? res.status(200).json({res: deleteManga}) : 
        res.status(400).json({response: 'Not found'})
    } catch (error) {
        next(error)
    }
}

export default deleteManga