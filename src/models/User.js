import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schemaUser = new Schema({
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  role: {
    type: "String",
    required: true,
    enum: ["common_user", "promoter"],
    default: "common_user",
  },
  password: {
    type: "String",
    required: true,
  },
});

const User = mongoose.model("User", schemaUser);

export default User;
