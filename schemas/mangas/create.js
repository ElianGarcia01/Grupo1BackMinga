import joi from "joi-oid";

const schema = joi.object({
    author_id: joi.objectId().messages({
        'string.pattern.name': 'Author ID must be a valid ObjectId'
    }),

    company_id: joi.objectId().messages({
        'string.pattern.name': 'Company ID must be a valid ObjectId'
    }),

    title: joi.string().min(3).max(100).required().messages({
            'string.base': 'Title must be a string',
            'string.min': 'Title must have at least 3 characters',
            'string.max': 'Title must have at most 100 characters',
        }),

    cover_photo: joi.string().uri().pattern(/\.(jpeg|jpg|png|webp)$/i).required().messages({
            'string.base': 'Cover photo must be a string (URL)',
            'string.uri': 'Cover photo must be a valid URL',
            'string.pattern.base': 'Cover photo must be a valid image link (.jpg, .jpeg, .png, .webp)',
        }),

    description: joi.string().min(10).max(1000).required().messages({
            'string.base': 'Description must be a string',
            'string.min': 'Description must have at least 10 characters',
            'string.max': 'Description must have at most 1000 characters',
        }),

    category_id: joi.objectId().required().messages({
            'string.pattern.name': 'Category ID must be a valid ObjectId',
        }),
});

export default schema;
