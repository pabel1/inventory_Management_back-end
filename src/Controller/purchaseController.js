const PurchaseModel = require("../Model/purchaseModel")
const PurchaseProductModel = require("../Model/purchaseProductModel")
const multipleCreateQuery = require("../Services/CommonQuerys/multipleCreateQuery")

const createPurchase=async(req,res)=>{
    try {
        const result= await multipleCreateQuery(req,PurchaseModel,PurchaseProductModel,"purchaseID")
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.toString())
    }

}
module.exports = {createPurchase}