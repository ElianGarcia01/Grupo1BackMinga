import Reaction from "../../models/Reaction.js";
import Favorite from "../../models/Favorite.js";

let createOrUpdate = async (req, res, next) => {
    try {
        const { manga_id, reaction } = req.body;
        const isLike = reaction === "like";

        const favoriteData = {};
        if (req.roleInfo.author) favoriteData.author_id = req.roleInfo.author._id;
        if (req.roleInfo.company) favoriteData.company_id = req.roleInfo.company._id;
        favoriteData.manga_id = manga_id;

        const existingReaction = await Reaction.findOne(favoriteData);

        if (existingReaction && existingReaction.reaction === reaction) {
            await Reaction.findByIdAndDelete(existingReaction._id);
            if (isLike) await Favorite.deleteOne(favoriteData);
            return res.status(200).json({ message: "Reaction deleted" });
        }

        if (existingReaction) {
            await Reaction.updateOne(favoriteData, { reaction });
            if (isLike) await Favorite.create(favoriteData);
            return res.status(200).json({
                message: isLike
                    ? "Reaction updated and added to favorites"
                    : "Reaction updated"
            });
        }

        await Reaction.create({ ...favoriteData, reaction });
        if (isLike) await Favorite.create(favoriteData);
        return res.status(201).json({
            message: isLike
                ? "Reaction created and added to favorites"
                : "Reaction created"
        });

    } catch (error) {
        console.log("Reaction error:", req.body.reaction);
        next(error);
    }
};

export default createOrUpdate;

