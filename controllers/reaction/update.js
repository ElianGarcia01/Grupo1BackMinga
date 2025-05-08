import Reaction from "../../models/Reaction.js";

let update = async (req, res, next) => {
    try {
        let updatedReaction = await Reaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (updatedReaction) {
            return res.status(200).json({ response: updatedReaction });
        } else {
            return res.status(404).json({ response: "Reaction not found" });
        }
    } catch (error) {
        next(error);
    }
};

export default update;
