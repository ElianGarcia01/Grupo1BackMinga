import Favorite from "../../models/Favorite.js"
import Reaction from "../../models/Reaction.js"

let deleteFavorite = async (req, res, next) => {
    try {
        const favoriteData = {};
        favoriteData.manga_id = req.body.manga_id
        if(req.roleInfo.author) favoriteData.author_id = req.roleInfo.author._id
        if(req.roleInfo.company) favoriteData.company_id = req.roleInfo.company._id

        let deleteFavorite = await Favorite.deleteOne(favoriteData)
        const deletedReaction = await Reaction.deleteOne(favoriteData)
        return res.status(200).json({
            message: "Favorite and reaction deleted",
            deleteFavorite,
            deletedReaction
        })
    } catch (error) {
        next(error)
    }
}

export default deleteFavorite