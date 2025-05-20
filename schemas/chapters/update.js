import joi from "joi-oid";

const schema = joi.object({
  _id: joi.objectId().required().messages({
    "any.required": "Chapter ID is required",
    "string.pattern.name": "Chapter ID must be a valid ObjectId",
  }),

  title: joi.string().min(3).max(100).messages({
    "string.base": "Title must be a string",
    "string.min": "Title must have at least 3 characters",
    "string.max": "Title must have at most 100 characters",
  }),

  cover_photo: joi
    .string()
    .uri()
    .pattern(/\.(jpeg|jpg|png|webp)$/i)
    .messages({
      "string.base": "Cover photo must be a string (URL)",
      "string.uri": "Cover photo must be a valid URL",
      "string.pattern.base":
        "Cover photo must be a valid image link (.jpg, .jpeg, .png, .webp)",
    }),

  pages: joi
    .array()
    .items(
      joi
        .string()
        .uri()
        .pattern(/\.(jpeg|jpg|png|webp)$/i)
        .messages({
          "string.uri": "Each page must be a valid image URL",
          "string.pattern.base":
            "Each page must be an image link (.jpg, .jpeg, .png, .webp)",
        })
    )
    .min(1)
    .messages({
      "array.base": "Pages must be an array",
      "array.min": "At least one page is required",
    }),

  order: joi.number().integer().min(1).messages({
    "number.base": "Order must be a number",
    "number.integer": "Order must be an integer",
    "number.min": "Order must be at least 1",
  }),

  manga_id: joi.objectId().messages({
    "any.required": "Manga ID is required",
    "string.pattern.name": "Manga ID must be a valid ObjectId",
  }),
});

export default schema;
