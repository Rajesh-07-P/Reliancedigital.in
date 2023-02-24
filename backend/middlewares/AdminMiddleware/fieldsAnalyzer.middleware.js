const fieldsAnalyzer=(req,res,next)=>{
    if(req.body.name && req.body.mobile && req.body.email && req.body.pass && req.body.gender){
        next()
    }else{
        res.send({message:'Few fields are missing, cannot process the request'})
    }
}

module.exports={fieldsAnalyzer}