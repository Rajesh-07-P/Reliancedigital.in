const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                req.body.user=decoded.userID
                next()
            } else{
                req.send({"msg":"Admin is not logged In"})
            }
        })
    } else{
        res.send({"msg":"Admin is not logged In"})
    }
}


module.exports={authenticate}