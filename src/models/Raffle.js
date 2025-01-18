import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";

const schemaRaffle = new Schema({
  name: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
  start_date: {
    type: "Date",
    required: true,
  },
  end_date: {
    type: "Date",
    required: true,
  },
  created_by: {
    type: "String",
    required: true,
  },
  is_active: {
    type: "Boolean",
    required: true,
    default: true,
  },
  max_participants: {
    type: "Number",
    required: true,
  },
});

const Raffle = mongoose.model("Raffle", schemaRaffle);

export default Raffle;
