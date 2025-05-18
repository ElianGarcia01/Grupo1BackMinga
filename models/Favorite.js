import { Schema, model } from "mongoose";

let collection = "favorities"
let schema = Schema({
    author_id: {type:Schema.Types.ObjectId, ref:'authors', required: false},
    company_id: {type:Schema.Types.ObjectId, ref:'companies', required: false}, 
    manga_id: {type:Schema.Types.ObjectId, ref:'mangas', required: true}
})

let Favorite = model(collection, schema)

export default Favorite