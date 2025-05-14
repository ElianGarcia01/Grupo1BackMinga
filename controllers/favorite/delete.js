import Favorite from "../../models/Favorite.js"

let deleteFavorite = async (req, res, next) => {
    try {
        req.body.user_id = req.user._id
        let deleteFavorite = await Favorite.deleteOne(req.body)
        return res.status(200).json({
            response: deleteFavorite
        })
    } catch (error) {
        next(error)
    }
}

export default deleteFavorite