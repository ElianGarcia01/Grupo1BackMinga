import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().pattern(/^[A-Za-z\s]+$/).required().messages({
        'string.base': 'Name must be a string',
        'string.pattern.base': 'Name must only contain letters and spaces',
    }),

    website: joi.string().uri().optional().messages({
        'string.base': 'Website must be a string (URL)',
        'string.uri': 'You must provide a valid website URL (example: "https://www...")',
    }),

    description: joi.string().min(10).max(500).required().messages({
        'string.base': 'Description must be a string',
        'string.min': 'Description must have at least 10 characters',
        'string.max': 'Description must have at most 500 characters',
    }),

    photo: joi.string().uri().pattern(/\.(jpeg|jpg|png|webp)$/i).required().messages({
        'string.base': 'Photo must be a string (URL)',
        'string.uri': 'You must provide a valid URL',
        'string.pattern.base': 'The link must be an image (.jpg, .jpeg, .png, .webp)',
    }),

    user_id: joi.objectId().messages({
        'string.pattern.name': 'User ID must be a valid ObjectId'
    })


})

export default schema