//imports
const mongoose = require("mongoose");

//create schema
const Schema = mongoose.Schema;
const MaleShoeSchema = Schema({
  shoeName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  shopId: {
    type: Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
});

//create and connect schema to model
const MaleShoeModel = mongoose.model("MaleShoe", MaleShoeSchema);

//export model
module.exports = MaleShoeModel;
