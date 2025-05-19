import Favorite from "../../models/Favorite.js"
import Manga from "../../models/Manga.js"


let byUser = async (req, res, next) => {
    try {
        const role = {}
        if(req.roleInfo.author) role.author_id = req.roleInfo.author._id
        if(req.roleInfo.company) role.company_id = req.roleInfo.company._id
        let favoritesByUser = await Favorite.find(role).populate('manga_id')
        res.status(200).json({
            response: favoritesByUser
        })
    } catch (error) {
        next(error)
    }
}

export default byUser