const ExpenseModel = require("../Model/expenseModel");
const updateQuerys = require("../Services/CommonQuerys/updateQuerys");
const createQuerys = require("../Services/CommonQuerys/createQuery");
const listingByJoin = require("../Services/CommonQuerys/listingByJoinQuery");
// create
const createExpense = async (req, res) => {
  try {
    if (req.body !== 0) {
      let result = await createQuerys(req, ExpenseModel);
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
const updateExpense = async (req, res) => {
  try {
    if (req.body && req.body !== 0) {
      let result = await updateQuerys(req, ExpenseModel);
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
// expense listing
const listingExpense = async (req, res) => {
  try {
    const searchRegax = { $regex: req.params.searchkeyword, $options: "i" };
    const searchArray = [
      { amount: searchRegax },
      { note: searchRegax },
      { "expenseType.name": searchRegax },
    ];
    let joinQuery = {
      $lookup: {
        from: "expensetypes",
        localField: "expenseTypeID",
        foreignField: "_id",
        as: "expenseType",
      },
    };
    const result = await listingByJoin(
      req,
      ExpenseModel,
      searchArray,
      joinQuery
    );
    // if(result.data.length!==0){
        res.status(200).json(result);
    // }else{
    //     res.status(200).json({
    //         status: "success",
    //         message: "Data Not found!",
    //       });
    // }    
    
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Server side Error",
    });
  }
};

module.exports = { createExpense, updateExpense, listingExpense };
