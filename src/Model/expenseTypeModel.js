const mongoose = require("mongoose");
const expenseTypeModel = mongoose.Schema({
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

const ExpenseTypeModel = mongoose.model("ExpenseType", expenseTypeModel);

module.exports = ExpenseTypeModel;