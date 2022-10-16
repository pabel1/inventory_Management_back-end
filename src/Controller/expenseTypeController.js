const ExpenseTypeModel = require("../Model/expenseTypeModel");
const createQuerys = require("../Services/CommonQuerys/createQuery");
const dropdownQuerys = require("../Services/CommonQuerys/dropdownQuerys");
const listingQuerys = require("../Services/CommonQuerys/listingQuery");
const updateQuerys = require("../Services/CommonQuerys/updateQuerys");

// create
const createExpenseType = async (req, res) => {
  try {
    if (req.body!== 0) {
      let result = await createQuerys(req,ExpenseTypeModel);
      res.status(200).json(result);
    } else {
      res.status(500).json({
        status: "failed",
        message: "Server side Error",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Server side Error",
    });
  }
};

// update
const updateExpenseType  = async (req, res) => {
    try {
      if (req.body && req.body !== 0) {
        let result = await updateQuerys(req, ExpenseTypeModel);
        res.status(200).json({
          status: "success",
          data: result,
        });
      } else {
        res.status(500).json({
          status: "failed",
          message: "Server side Error",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "Server side Error",
      });
    }
  };
//   brand listing

const listingExpenseType = async (req, res) => {
    try {
      let searchRegax={"$regex":req.params.searchkeyword,"$options":"i"}
      let searchArray=[{name:searchRegax}]
      let result= await listingQuerys(req,ExpenseTypeModel,searchArray)
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "Server side Error",
      });
    }
  };

//   dropdown  list

const dropdownListExpenseType = async (req, res) => {
    try {
      let result= await dropdownQuerys(req,ExpenseTypeModel);
      res.status(200).json({
        status:"success",
        data: result,
      })
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "Server side Error",
      });
    }
  };




module.exports = { createExpenseType,updateExpenseType,listingExpenseType,dropdownListExpenseType };
