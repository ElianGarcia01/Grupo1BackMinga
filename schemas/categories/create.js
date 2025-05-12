import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().min(2).max(50).required().messages({
        'string.base': 'Name must be a string',
        'string.min': 'Name must have at least 2 characters',
        'string.max': 'Name must have at most 50 characters'
    }),

    color: joi.string().pattern(/^#([A-Fa-f0-9]{6})$/).required().messages({
        'string.pattern.base': 'Color must be a valid hex code (e.g., #FFFFFF)',
    }),

    hover: joi.string().pattern(/^#([A-Fa-f0-9]{6})$/).required().messages({
        'string.pattern.base': 'Hover must be a valid hex code (e.g., #FFFFFF)',
    }),

    description: joi.string().min(10).max(300).messages({
        'string.base': 'Description must be a string',
        'string.min': 'Description must have at least 10 characters',
        'string.max': 'Description must have at most 300 characters'
    }),

    cover_photo: joi.string().uri().pattern(/\.(jpeg|jpg|png|webp)$/i).messages({
        'string.uri': 'Cover photo must be a valid URL',
        'string.pattern.base': 'Cover photo must be a valid image (.jpg, .jpeg, .png, .webp)'
    }),

    character_photo: joi.string().uri().pattern(/\.(jpeg|jpg|png|webp)$/i).messages({
        'string.uri': 'Character photo must be a valid URL',
        'string.pattern.base': 'Character photo must be a valid image (.jpg, .jpeg, .png, .webp)'
    }),

    admin_id: joi.objectId().messages({
        'string.pattern.name': 'Admin ID must be a valid ObjectId'
    })
});

export default schema;
