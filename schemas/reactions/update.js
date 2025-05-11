import joi from "joi-oid";

const schema = joi.object({
    reaction: joi.string().valid('like', 'dislike', 'surprised', 'love').required().messages({
        'any.only': 'Reaction must be one of: like, dislike, surprised, love',
    })
});

export default schema;
