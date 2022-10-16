
const createQuerys=async (req,DataModel)=>{
    try {
        let postDataBody= req.body;
        postDataBody.email=req.email;

        let resData=await DataModel.create(postDataBody);

        return {status:"success",data:resData};
        
    } catch (error) {
        return {status:"success",error:error.toString()}; 
    }

}
module.exports= createQuerys