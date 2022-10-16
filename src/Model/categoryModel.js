const mongoose = require("mongoose");
const categoryModel = mongoose.Schema({
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

const CategoryModel = mongoose.model("Category", categoryModel);

module.exports = CategoryModel;