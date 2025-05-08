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

export default allReactions