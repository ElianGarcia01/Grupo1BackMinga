import Category from "../../models/Category.js";

let update = async (req, res, next) => {
    try {
            let { _id, name, color, hover, description, cover_photo, character_photo } = req.body;
    
            let categoryInfo = {}
            if (name) categoryInfo.name = name;
            if (color) categoryInfo.color = color;
            if (hover) categoryInfo.hover = hover;
            if (description) categoryInfo.description = description;
            if (cover_photo) categoryInfo.cover_photo = cover_photo;
            if (character_photo) categoryInfo.character_photo = character_photo;
    
            let updateCategory = await Category.updateOne(
                { _id: _id},
                { $set: categoryInfo}
            )
            return res.status(200).json({
                response: updateCategory
            })
            
        } catch (error) {
            next(error)
        }
}

export default update