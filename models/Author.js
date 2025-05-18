import { Schema, model } from "mongoose";

let collection = 'authors'
let schema = Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: false}, 
    city: {type: String, required: true},
    country: {type: String, required: true},
    date_birth: {type: Date, required: false},
    photo: {type: String, required: true},
    user_id: {type:Schema.Types.ObjectId, ref:'users', required: true},
    active: {type: Boolean, default: true }
},{
    timestamps: true
})

let Author = model( collection, schema )

export default Author