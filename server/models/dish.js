const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const Schema = mongoose.Schema;

const SchemaTypes = mongoose.Schema.Types;
const dishSchema = new Schema({
  dishName: {
      type: String, 
      required: true
  },
  dishImg: {
      type: String,
      required: false
  },
  dishDescription: {
      type: String, 
      required: true
  },
  category: {
      type: String,
      required: true,
  },
  dishPrice: {
      type: SchemaTypes.Double,
      required: true
  }
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;