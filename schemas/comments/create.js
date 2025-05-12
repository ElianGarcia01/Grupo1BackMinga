import joi from "joi-oid"

const schema = joi.object({
    message: joi.string().pattern(/^[\w\s\S]*$/).min(10).max(1000).required().messages({
        'string.base': 'Message must be a string',
        'string.min': 'Message must have at least 10 characters',
        'string.max': 'Message must have at most 1000 characters',
    }),

    chapter_id: joi.objectId().messages({
        'string.pattern.name': 'Chapter ID must be a valid ObjectId'
    }),

    author_id: joi.objectId().messages({
        'string.pattern.name': 'Author ID must be a valid ObjectId'
    }),

    company_id: joi.objectId().messages({
        'string.pattern.name': 'Company ID must be a valid ObjectId'
    })
})

export default schema