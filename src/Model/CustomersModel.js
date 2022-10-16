const mongoose = require("mongoose");
const customersModel = mongoose.Schema({
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

const CustomersModel = mongoose.model("Customers", customersModel);

module.exports = CustomersModel;