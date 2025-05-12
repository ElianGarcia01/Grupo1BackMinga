import Reaction from "../../models/Reaction.js";

let createOrUpdate = async (req, res, next) => {
    try {
        let reactionInfo = req.body;
        console.log(reactionInfo);

        let query = {
            manga_id: reactionInfo.manga_id,
        };

        if (reactionInfo.author_id) {
            query.author_id = reactionInfo.author_id;
        } else if (reactionInfo.company_id) {
            query.company_id = reactionInfo.company_id;
        }

        let reactionInDb = await Reaction.findOne(query);

        if (reactionInDb) {
    
            reactionInDb.reaction = reactionInfo.reaction;
            await reactionInDb.save();

            return res.status(200).json({
                response: reactionInDb,
                message: "Reaction updated",
            });
        } else {
      
            let newReaction = await Reaction.create(reactionInfo);

            return res.status(201).json({
                response: newReaction,
                message: "Reaction created",
            });
        }
        
    } catch (error) {
        next(error);
    }
};

export default createOrUpdate;
