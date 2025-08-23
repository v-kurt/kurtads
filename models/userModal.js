import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  title: String,
  role: {
    type: String,
    enum: ["Customer", "Employee", "TeamMember", "SuperAdmin"],
  },
  profilePic: String, // URL or path to image
  brands: [{ type: mongoose.Schema.Types.ObjectId, ref: "Brand" }],
});

const User = mongoose.model("User", userSchema);

export default User;
