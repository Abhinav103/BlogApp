import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkId:{
      type:String,
      required:true,
      unique:true
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    ProfileImage: {
      type: String,
    },
    SavedPosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users",UserSchema );
export default UserModel;

