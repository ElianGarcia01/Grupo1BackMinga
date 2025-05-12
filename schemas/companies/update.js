import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().pattern(/^[A-Za-z\s]+$/).messages({
        'string.base': 'Name must be a string',
        'string.pattern.base': 'Name must only contain letters and spaces',
    }),

    website: joi.string().uri().messages({
        'string.base': 'Website must be a string (URL)',
        'string.uri': 'You must provide a valid website URL',
    }),

    description: joi.string().min(10).max(500).messages({
        'string.base': 'Description must be a string',
        'string.min': 'Description must have at least 10 characters',
        'string.max': 'Description must have at most 500 characters',
    }),

    photo: joi.string().uri().pattern(/\.(jpeg|jpg|png|webp)$/i).messages({
        'string.base': 'Photo must be a string (URL)',
        'string.uri': 'You must provide a valid URL',
        'string.pattern.base': 'The link must be an image (.jpg, .jpeg, .png, .webp)',
    })
})

export default schema