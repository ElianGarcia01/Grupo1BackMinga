import joi from "joi-oid"

const schema = joi.object({
    email: joi.string().required().email().messages({
        'string.base' : 'Email must be a string',
        'string.email' : 'This is not a valid email format'
   }),
   password: joi.string().required().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).min(8).messages({
    'string.base' : "The password must be a string",
    'string.pattern.base' : 'Must include an uppercase letter, a lowercase letter, and a number',
    'string.min' : 'Must have 8 characters at least'
   }),
   photo: joi.string().uri().pattern(/\.(jpeg|jpg|png|webp)$/i).required().messages({
               'string.base': 'Photo must be a string (URL)',
               'string.uri': 'You must provide a valid URL',
               'string.pattern.base': 'The link must be an image (.jpg, .jpeg, .png, .webp)',
           })

})

export default schema