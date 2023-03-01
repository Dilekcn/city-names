const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cityNameSchema = new Schema(
  {
    cityname: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CityNames = mongoose.model("CityNames", cityNameSchema);
module.exports = CityNames;
