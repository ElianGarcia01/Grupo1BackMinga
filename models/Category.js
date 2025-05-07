import { Schema, model } from "mongoose";

let collection = 'categories'
let schema = Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    hover: {type: String, required: true},
    description: {type: String, required: false},
    cover_photo: {type: String, required: false},
    character_photo: {type: String, required: false},
    admin_id: {type:Schema.Types.ObjectId, ref:'users', required: false}

},{
    timestamps: true
})

let Category = model( collection, schema)

export default Category