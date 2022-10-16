
const updateQuerys=async (req,DataModel)=>{

    try {
        let updateData=req.body;

        let resData= await DataModel.updateOne({_id:req.params.id,email:req.email},updateData)

        return resData;
    } catch (error) {
        return error.toString();
    }
 
   

}

module.exports= updateQuerys