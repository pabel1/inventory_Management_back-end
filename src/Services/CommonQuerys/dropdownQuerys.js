const dropdownQuerys = async (req, DataModel) => {
  try {
    const email = req.email;
    let resData = await DataModel.aggregate([
      { $match: { email: email } },
      { $project: { _id: 1, name: 1 } },
    ]);
    return resData;
  } catch (error) {
    return error.toString();
  }
};
module.exports = dropdownQuerys;
