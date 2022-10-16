const mongoose = require("mongoose");
const productModel = mongoose.Schema({
 
  email: {
    type: String
  },
  name: {
    type: String
  },
  unit: {
    type: String
  },
  details: {
    type: String
  },
  categoryID:{
    type:mongoose.Schema.Types.ObjectID,
  },
  brandID:{
    type:mongoose.Schema.Types.ObjectID,
  },
  createdDate:{
    type: Date,
    default: Date.now
  },
  __v: false,
});

const ProductModel = mongoose.model("Product", productModel);

module.exports = ProductModel;