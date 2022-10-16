
const listingQuerys=async (req,DataModel,searchArray)=>{
    try {
        let pageno=Number(req.params.pageno);
        let perpage=Number(req.params.perpage);
        let searchValue=req.params.searchkeyword;

        let skipRow= (pageno-1)*perpage;

        let resData;

        if(searchValue!=="0"){
            let searchQuery={$or:searchArray}
             resData= await DataModel.aggregate([
                {$match:{email:req.email}},
                {$match:searchQuery},
                {
                    $facet:{
                        total:[{$count:"count"}],
                        rows:[{$skip:skipRow},{$limit:perpage}]
                    }
                }
            ])

        }else{
            resData= await DataModel.aggregate([
                {$match:{email:req.email}},
                {
                    $facet:{
                        total:[{$count:"count"}],
                        rows:[{$skip:skipRow},{$limit:perpage}]
                    }
                }
            ])

        }
        return {status:"success",data:resData}
        
    } catch (error) {
        return {status:"failed",data:error.toString(), message: "Server side Error",}
    }


}

module.exports=listingQuerys;