//imports
const mongoose = require("mongoose");

//create schema
const Schema = mongoose.Schema;
const ShopSchema = Schema({
  shopName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  menShoe: {
    shoeName_men: {
      type: String,
      required: true,
    },
    shoePrice_men: {
      type: Number,
      required: true,
    },
  },

  womenShoe: {
    shoeName_women: {
      type: String,
      required: true,
    },
    shoePrice_women: {
      type: Number,
      required: true,
    },
  },

  kidsShoe: {
    shoeName_kids: {
      type: String,
      required: true,
    },
    shoePrice_kids: {
      type: Number,
      required: true,
    },
  },

  phone: {
    type: Number,
    required: true,
  },
});

//create and connect schema to model
const ShopModel = mongoose.model("Shop", ShopSchema);

//export model
module.exports = ShopModel;
