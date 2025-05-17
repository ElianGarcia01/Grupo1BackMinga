// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String },
  role: { type: Number, default: 0 }, 
  online: { type: Boolean, default: false },
  active: { type: Boolean, default: true }, 
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
