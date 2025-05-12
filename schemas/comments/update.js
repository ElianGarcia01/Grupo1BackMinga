import joi from "joi-oid"

const schema = joi.object({
    _id: joi.objectId().required().messages({
        "any.required": "Comment ID is required",
        "string.pattern.name": "Comment ID must be a valid ObjectId"
      }),

    message: joi.string().pattern(/^[\w\s\S]*$/).min(10).max(1000).required().messages({
                'string.base': 'Message must be a string',
                'string.min': 'Message must have at least 10 characters',
                'string.max': 'Message must have at most 1000 characters',
            }),
})

export default schema