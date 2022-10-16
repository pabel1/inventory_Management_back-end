const mongoose = require("mongoose");
const purchaseModel = mongoose.Schema({
 
  email: {
    type: String
  },
  supplierID:{
    type:mongoose.Schema.Types.ObjectID,
  },
  vattax: {
    type: Number,
    
  },
  discount: {
    type: Number,
    
  },
  otherConst: {
    type: Number,
    
  },
  shippingCost: {
    type: Number,
    
  },
  grandTotal: {
    type: Number,
    
  },
  note: {
    type: String
  },
  createdDate:{
    type: Date,
    default: Date.now
  },
  versionKey: false,
});

const PurchaseModel = mongoose.model("Purchase", purchaseModel);

module.exports = PurchaseModel;