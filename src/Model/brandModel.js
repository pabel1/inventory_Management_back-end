const mongoose = require("mongoose");
const brandModel = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  email: {
    type: String
  },
  createdDate:{
    type: Date,
    default: Date.now
  },
  __v: false,
});

const BrandModel = mongoose.model("Brand", brandModel);

module.exports = BrandModel;