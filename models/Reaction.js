import { Schema, model } from "mongoose";

let collection = 'reactions'
let schema = Schema({
    manga_id: {type:Schema.Types.ObjectId, ref:'mangas', required: true}, 
    author_id: {type:Schema.Types.ObjectId, ref:'authors', required: false},
    company_id: {type:Schema.Types.ObjectId, ref:'companies', required: false}, 
    reaction: {type: String, required: true, enum: ['like', 'dislike', 'surprised', 'love']}    
})

let Reaction = model(collection,schema)

export default Reaction