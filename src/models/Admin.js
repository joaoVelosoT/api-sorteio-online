import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schemaAdmin = new Schema({
  name: {
    type: "String",
    required: true,
  },
  registration: {
    type: "String",
    required: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
  },
});

const Admin = mongoose.model("Admin", schemaAdmin);
export default Admin;
