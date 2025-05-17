import Favorite from "../../models/Favorite.js"

let createFavorite = async (req, res, next) => {
    try {
        req.body.user_id = req.user._id
        let createFavorite = await Favorite.create(req.body)
        return res.status(201).json({
            response: createFavorite
        })
    } catch (error) {
        next(error)
    }
}

export default createFavorite