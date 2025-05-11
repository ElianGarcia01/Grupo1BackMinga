import joi from "joi-oid";

const schema = joi.object({
    manga_id: joi.objectId().required().messages({
        'any.required': 'Manga ID is required',
        'string.pattern.name': 'Manga ID must be a valid ObjectId'
    }),
    author_id: joi.objectId().messages({
        'string.pattern.name': 'Author ID must be a valid ObjectId'
    }),
    company_id: joi.objectId().messages({
        'string.pattern.name': 'Company ID must be a valid ObjectId'
    }),
    reaction: joi.string().valid('like', 'dislike', 'surprised', 'love').required().messages({
        'any.only': 'Reaction must be one of: like, dislike, surprised, love',
    })
});

export default schema;
