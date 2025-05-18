import joi from "joi-oid"

const schema = joi.object({
    name: joi.string().pattern(/^[A-Za-z\s]+$/).required().messages({
        'string.base': 'Name must be a string',
        'string.pattern.base': 'Name must only contain letters and spaces',
    }),

    lastName: joi.string().pattern(/^[A-Za-z\s]+$/).required().messages({
        'string.base': 'Last name must be a string',
        'string.pattern.base': 'Last name must only contain letters and spaces',
    }),

    city: joi.string().pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/).required().messages({
        'string.base': 'City must be a string',
        'string.pattern.base': 'City must only contain letters and spaces',
    }),

    country: joi.string().pattern(/^[A-Za-z\s]+$/).required().messages({
        'string.base': 'Country must be a string',
        'string.pattern.base': 'Country must only contain letters and spaces',
    }),

    date_birth: joi.date().less('now').greater('1-1-1900').required().messages({
        'date.base': 'Date of birth must be a valid date',
        'date.less': 'Date of birth must be in the past',
        'date.greater': 'Date of birth must be after January 1, 1900',
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
