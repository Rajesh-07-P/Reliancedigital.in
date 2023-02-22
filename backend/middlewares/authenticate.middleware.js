const jwt=require("jsonwebtoken")
require("dotenv").config();

const authentication=(req,res,next)=>{
    const token=req.headers.authorization

    if(token)
    {
        jwt.verify(token,process.env.key,(err,decoded)=>{

            if(decoded)
            {
                req.body.userID=decoded.userID
                next()
            }
            else
            {
                res.send({"msg":"user not registered"})
            }
        })
    }
    else
    {
        res.send({"msg":"user not registered"})
    }
}

module.exports={
    authentication
}