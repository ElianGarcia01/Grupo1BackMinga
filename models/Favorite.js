import { Schema, model } from "mongoose";

let collection = "favorities"
let schema = Schema({
    user_id: {type:Schema.Types.ObjectId, ref:'users', required: true},
    manga_id: {type:Schema.Types.ObjectId, ref:'mangas', required: true}
})

let Favorite = model(collection, schema)

export default Favorite