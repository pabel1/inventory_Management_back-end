const mongoose = require("mongoose");
const purchaseProductModel = mongoose.Schema({
 
  email: {
    type: String
  },
  purchaseID:{
    type:mongoose.Schema.Types.ObjectID,
  },
  productID:{
    type:mongoose.Schema.Types.ObjectID,
  },
  unitCost: {
    type: Number,
    
  },
  qnty: {
    type: Number,
    
  },
  total: {
    type: Number,
    
  },
  createdDate:{
    type: Date,
    default: Date.now
  },
  versionKey: false,
});

const PurchaseProductModel = mongoose.model("PurchaseProduct", purchaseProductModel);

module.exports = PurchaseProductModel;