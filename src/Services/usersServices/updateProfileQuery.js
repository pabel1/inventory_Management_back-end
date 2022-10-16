const bcrypt= require('bcrypt');
const updateProfileQuery = async (req, UserModel) => {
  try {
    
    if(req.body.password){
        let hashPassword = await bcrypt.hash(req.body.password, 10);
    }

    const updateData = await UserModel.updateOne({ _id: req.id },{
        $set:{
            "firstname":req.body.firstname,
            "lastname":req.body.lastname,
            "email":req.body.email,
            "mobile":req.body.mobile,
            "password":await bcrypt.hash(req.body.password, 10),
            "photo":req.body.photo,

        }
    });
    return updateData;
    // console.log(updateData)
  } catch (error) {
    return error.toString();
  }
};

module.exports =updateProfileQuery;
