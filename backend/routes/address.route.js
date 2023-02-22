// const {CartModel}=require("../model/Post.model")
const {AddressModel}=require("../models/address.model")
const express=require("express")
const jwt=require("jsonwebtoken")

const addressRouter=express.Router()

addressRouter.post("/create",async(req,res)=>{
    // const user=await UserModel.find({email})
    const payload=req.body

    // res.send("verified")
    try{
        const user=new AddressModel(payload)
        await user.save()
        res.send({"msg":"post saved"})

    }
    catch{
res.send({"msg":"not able to create post"})
    }
})


addressRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization;
    jwt.verify(token,"masai",async(err,decoded)=>{
        if(decoded)
        {
            try
            {
                const posts=await AddressModel.find({userID:decoded?.userID})
                res.send(posts)
    
            }
            catch(err)
            {
                res.send({"msg":"data not found"})
            }
        }
        else
        {
            res.send({"msg":"data can't reached"})
        }
       
    })
})




module.exports={
    addressRouter
}