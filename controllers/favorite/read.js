import Favorite from "../../models/Favorite.js"
import Manga from "../../models/Manga.js"


let byUser = async (req, res, next) => {
    try {
        let favoritesByUser = await Favorite.find({ user_id: req.user._id }).populate('manga_id')
        res.status(200).json({
            response: favoritesByUser
        })
    } catch (error) {
        next(error)
    }
}

export default byUser