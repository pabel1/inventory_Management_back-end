const mongoose = require("mongoose");
const expenseModel = mongoose.Schema({
 
  email: {
    type: String
  },
  expenseTypeID:{
    type:mongoose.Schema.Types.ObjectID,
  },
  amount: {
    type: Number,
    
  },
  note: {
    type: String
  },
  createdDate:{
    type: Date,
    default: Date.now
  },
  __v: false,
});

const ExpenseModel = mongoose.model("Expense", expenseModel);

module.exports = ExpenseModel;