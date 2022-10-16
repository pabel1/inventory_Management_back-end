
const loggedUserQuery= async (req,UserModel)=>{
    try {
        const user= await UserModel.aggregate([{$match:{email:req.email}}])
        // console.log(req.id);
        // console.log(req.email);
        // const user = await UserModel.findOne({ _id: req.id });
        // console.log(user);
        return user;
        
    } catch (error) {
        return error.toString();
    }

}
module.exports=loggedUserQuery