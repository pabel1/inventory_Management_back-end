const ProductModel = require("../Model/productModel");
const createQuerys = require("../Services/CommonQuerys/createQuery");
const dropdownQuerys = require("../Services/CommonQuerys/dropdownQuerys");
const listingByJoinTwo = require("../Services/CommonQuerys/listingJoinByTwoQuery");
const listingQuerys = require("../Services/CommonQuerys/listingQuery");
const updateQuerys = require("../Services/CommonQuerys/updateQuerys");

// create
const createProduct = async (req, res) => {
  try {
    if (req.body !== 0) {
      let result = await createQuerys(req, ProductModel);
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
const updateProduct = async (req, res) => {
  try {
    if (req.body && req.body !== 0) {
      let result = await updateQuerys(req, ProductModel);
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

const listingProduct = async (req, res) => {
  try {
    let searchRegax = { $regex: req.params.searchkeyword, $options: "i" };

    let joinQueryOne = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brands",
      },
    };
    let joinQueryTwo = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };

    let searchArray = [
      { name: searchRegax },
      { unit: searchRegax },
      { details: searchRegax },
      { "category.name": searchRegax },
      { "brands.name": searchRegax },
    ];

    let result = await listingByJoinTwo(
      req,
      ProductModel,
      searchArray,
      joinQueryOne,
      joinQueryTwo
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Server side Error",
    });
  }
};

//   dropdown  list

// const dropdownListProduct = async (req, res) => {
//     try {
//       let result= await dropdownQuerys(req,ProductModel);
//       res.status(200).json({
//         status:"success",
//         data: result,
//       })
//     } catch (error) {
//       res.status(500).json({
//         status: "failed",
//         message: "Server side Error",
//       });
//     }
//   };

module.exports = { createProduct, updateProduct,listingProduct };
