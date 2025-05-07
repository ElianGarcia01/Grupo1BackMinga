import { Schema, model } from "mongoose"

let collection = 'comments'
let schema = Schema({
    chapterid_: {type:Schema.Types.ObjectId, ref:'chapters', required: true}, 
    author_id: {type:Schema.Types.ObjectId, ref:'authors', required: true},
    company_id: {type:Schema.Types.ObjectId, ref:'companies', required: true},
    message: { type: String, required: true}
})

let Comment = model(collection, schema)

export default Comment