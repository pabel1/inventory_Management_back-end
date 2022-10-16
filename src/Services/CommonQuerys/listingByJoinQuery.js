const listingByJoin = async (req, DataModel,searchArray,joinQuery) => {
  try {
    let pageno = Number(req.params.pageno);
    let perpage = Number(req.params.perpage);
    let searchValue = req.params.searchkeyword;

    let skipRow = (pageno - 1) * perpage;

    let resData;

    if (searchValue !== "0") {
      let searchQuery = { $or: searchArray };
      resData = await DataModel.aggregate([
        { $match: { email: req.email } },
        joinQuery,
        { $match: searchQuery },
        {
          $facet: {
            total: [{ $count: "count" }],
            rows: [{ $skip: skipRow }, { $limit: perpage }],
          },
        },
      ]);
    } else {
      resData = await DataModel.aggregate([
        { $match: { email: req.email } },
        joinQuery,
        {
          $facet: {
            total: [{ $count: "count" }],
            rows: [{ $skip: skipRow }, { $limit: perpage }],
          },
        },
      ]);
    }
    return { status: "success", data: resData };
  } catch (error) {
    return {
      status: "failed",
      data: error.toString(),
      message: "Server side Error",
    };
  }
};
module.exports = listingByJoin;
