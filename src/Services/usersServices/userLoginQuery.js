const bcrypt = require("bcrypt");

const userLoginQuery = async (req, UserModel) => {
  try {
    const user = await UserModel.find({ email: req.body.email });
    return user;
  } catch (error) {
    return error.toString();
  }
};
module.exports = userLoginQuery;
