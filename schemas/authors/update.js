import joi from "joi-oid";

const schema = joi.object({
    
    photo: joi.string()
        .uri()
        .pattern(/\.(jpeg|jpg|png|webp)$/i)
        .required()
        .messages({
            'string.base': 'Photo must be a string (URL)',
            'string.uri': 'Photo must be a valid URL',
            'string.pattern.base': 'The photo link must end with .jpg, .jpeg, .png, or .webp',
        })
});

export default schema;
