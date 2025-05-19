import Reaction from "../../models/Reaction.js"

let allReactions = async (req,res,next) => {
    try {
        let all = await Reaction.find({})
        .populate('manga_id', 'title')
        .populate('author_id', 'name')
        .populate('company_id',  'name')
        .exec()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }
}

let ByUserAndManga = async (req, res, next) => {
    try {
        let manga = {}
        manga.manga_id = req.query.manga_id
        if (req.roleInfo.author) manga.author_id = req.roleInfo.author._id;
        if (req.roleInfo.company) manga.company_id = req.roleInfo.company._id;
        let reaction = await Reaction.findOne(manga)
        if (!reaction) return res.status(200).json({ reaction: null });
        res.status(200).json({
            reaction: reaction.reaction
        })
    } catch (error) {
        next(error)
    }
}

export {allReactions, ByUserAndManga}