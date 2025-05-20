import joi from "joi-oid";

const schema = joi.object({
    _id: joi.objectId().messages({
        'string.pattern.name': 'User ID must be a valid ObjectId'
    }),
    
    photo: joi.string().uri().pattern(/\.(jpeg|jpg|png|webp)$/i).required().messages({
        'string.base': 'Photo must be a string (URL)',
        'string.uri': 'Photo must be a valid URL',
        'string.pattern.base': 'The photo link must end with .jpg, .jpeg, .png, or .webp',
    }),

    // Nuevos campos permitidos ↓
    name: joi.string().allow("").optional().messages({
        'string.base': 'Name must be a string',
    }),
    lastName: joi.string().allow("").optional().messages({
        'string.base': 'Last name must be a string',
    }),
    city: joi.string().allow("").optional().messages({
        'string.base': 'City must be a string',
    }),
    date_birth: joi.date().allow(null).optional().messages({
        'date.base': 'Birth date must be a valid date',
    }),
});

export default schema;