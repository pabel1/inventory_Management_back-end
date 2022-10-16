const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");

const authVerification = require("../Middleware/authVerification");
const { createBrands, updateBrands, listingBrands, dropdownListBrands } = require("../Controller/brandsController");
const { createCategory, updateCategory, listingCategory, dropdownListCategory } = require("../Controller/categoryController");
const { createSupplier, updateSupplier, listingSupplier, dropdownListSupplier } = require("../Controller/supplierController");
const { createCustomers, updateCustomers, listingCustomers, dropdownListCustomers } = require("../Controller/customersController");
const { createExpenseType, updateExpenseType, listingExpenseType, dropdownListExpenseType } = require("../Controller/expenseTypeController");
const { createExpense, updateExpense, listingExpense } = require("../Controller/expenseController");
const { createProduct, updateProduct, listingProduct } = require("../Controller/productController");
const { createPurchase } = require("../Controller/purchaseController");

router.use("/user",userRouter)

// brand router
router.post("/createbrand",authVerification,createBrands)
router.put("/updatebrand/:id",authVerification,updateBrands)
router.get("/listingbrand/:pageno/:perpage/:searchkeyword",authVerification,listingBrands)
router.get("/dropdownbrand",authVerification,dropdownListBrands)
// Category router
router.post("/createcategory",authVerification,createCategory)
router.put("/updatecategory/:id",authVerification,updateCategory)
router.get("/listingcategory/:pageno/:perpage/:searchkeyword",authVerification,listingCategory)
router.get("/dropdowncategory",authVerification,dropdownListCategory)
// supplier router
router.post("/createsupplier",authVerification,createSupplier)
router.put("/updatesupplier/:id",authVerification,updateSupplier)
router.get("/listingsupplier/:pageno/:perpage/:searchkeyword",authVerification,listingSupplier)
router.get("/dropdownsupplier",authVerification,dropdownListSupplier)
// customers router
router.post("/createcustomer",authVerification,createCustomers)
router.put("/updatecustomer/:id",authVerification,updateCustomers)
router.get("/listingcustomer/:pageno/:perpage/:searchkeyword",authVerification,listingCustomers)
router.get("/dropdowncustomer",authVerification,dropdownListCustomers)
// expenseType router
router.post("/createexpensetype",authVerification,createExpenseType)
router.put("/updateexpensetype/:id",authVerification,updateExpenseType)
router.get("/listingexpensetype/:pageno/:perpage/:searchkeyword",authVerification,listingExpenseType)
router.get("/dropdownexpensetype",authVerification,dropdownListExpenseType)
// expense  router
router.post("/createexpense",authVerification,createExpense)
router.put("/updateexpense/:id",authVerification,updateExpense)
router.get("/listingexpense/:pageno/:perpage/:searchkeyword",authVerification,listingExpense)
// router.get("/dropdownexpensetype",authVerification,dropdownListExpenseType)
// product  router
router.post("/createproduct",authVerification,createProduct)
router.put("/updateproduct/:id",authVerification,updateProduct)
router.get("/listingproduct/:pageno/:perpage/:searchkeyword",authVerification,listingProduct)
// router.get("/dropdownexpensetype",authVerification,dropdownListExpenseType)


// purchase  router
router.post("/createpurchase",authVerification,createPurchase)
// router.put("/updateproduct/:id",authVerification,updateProduct)
// router.get("/listingproduct/:pageno/:perpage/:searchkeyword",authVerification,listingProduct)


module.exports = router;