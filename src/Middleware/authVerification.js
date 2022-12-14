const jwt= require("jsonwebtoken");

const authVerification=(req,res,next)=>{
    const {authorization}=req.headers;
    try {
        // console.log(authorization)
        const token=authorization.split(" ")[1];
        const decoded= jwt.verify(token,process.env.JWT_TOKEN);
        const {email,userId}=decoded;
        req.email=email;
        req.id=userId;
     
        next();
        
    } catch (error) {
        next("Authentication Failed!");
    }
}

module.exports=authVerification;