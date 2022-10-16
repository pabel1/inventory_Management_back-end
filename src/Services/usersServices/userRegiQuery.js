const bcrypt = require("bcrypt");
const userRegiQuery = async (req, UserModel) => {
  
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = new UserModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      mobile: req.body.mobile,
      password: hashPassword,
      photo: req.body.photo,
    });
    let userData= await user.save();
    return userData

  } catch (error) {
    return error.toString();
  }
};
module.exports= userRegiQuery;