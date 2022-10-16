const mongoose = require("mongoose");
const suppliersModel = mongoose.Schema({
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

const SuppliersModel = mongoose.model("Supplier", suppliersModel);

module.exports = SuppliersModel;