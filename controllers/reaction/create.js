import Reaction from "../../models/Reaction.js";

let create = async (req, res, next) => {
    try {
        let reactionInfo = req.body
        console.log(reactionInfo);

        let createReaction = await Reaction.create(reactionInfo)
        return res.status(201).json({
            response: createReaction
        })
        
        
    } catch (error) {
        next(error)
    }
}

export default create