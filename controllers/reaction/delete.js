import Reaction from "../../models/Reaction.js";

let deleteReaction = async (req, res, next) => {
    try {
        let deletedReaction = await Reaction.findByIdAndDelete(req.params.id);

        if (deletedReaction) {
            return res.status(200).json({ response: deletedReaction });
        } else {
            return res.status(404).json({ response: "Reaction not found" });
        }
    } catch (error) {
        next(error);
    }
};

export default deleteReaction;
