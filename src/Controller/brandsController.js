const BrandModel = require("../Model/brandModel");
const createQuerys = require("../Services/CommonQuerys/createQuery");
const dropdownQuerys = require("../Services/CommonQuerys/dropdownQuerys");
const listingQuerys = require("../Services/CommonQuerys/listingQuery");
const updateQuerys = require("../Services/CommonQuerys/updateQuerys");

// create
const createBrands = async (req, res) => {
  try {
    if (req.body!== 0) {
      let result = await createQuerys(req,BrandModel);
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
const updateBrands = async (req, res) => {
    try {
      if (req.body && req.body !== 0) {
        let result = await updateQuerys(req, BrandModel);
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

const listingBrands = async (req, res) => {
    try {
      let searchRegax={"$regex":req.params.searchkeyword,"$options":"i"}
      let searchArray=[{name:searchRegax}]
      let result= await listingQuerys(req,BrandModel,searchArray)
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        status: "failed",
        message: "Server side Error",
      });
    }
  };

//   dropdown  list

const dropdownListBrands = async (req, res) => {
    try {
      let result= await dropdownQuerys(req,BrandModel);
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




module.exports = { createBrands,updateBrands,listingBrands,dropdownListBrands };
