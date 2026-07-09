import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    collection: "user"   // <-- Tell Mongoose to use the "user" collection
  }
);

const User = mongoose.model("User", userSchema);

console.log("User Collection:", User.collection.name);

export default User;