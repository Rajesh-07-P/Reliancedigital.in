
const express=require("express")
const jwt=require("jsonwebtoken")
const {CartModel}=require("../models/cart.model")

const cartRouter=express.Router()

cartRouter.post("/add",async(req,res)=>{
   const payload=req.body
    try{

        const user=new CartModel(payload)
        await user.save()
        res.send({"msg":"post saved"})

    }
    catch{
res.send({"msg":"not able to create post"})
    }
})
cartRouter.get("/",async(req,res)=>{
    
  
    try
    {
        const products=await CartModel.find({userID:req.body.userID})
        res.send(products)

    }
    catch(err)
    {
        res.send({"msg":"data not found"})
    }
}



)


cartRouter.patch("/update/:id",async(req,res)=>{
    let id=req.params.id
    const payload =req.body
    console.log(id)

    try
    {
await CartModel.findByIdAndUpdate({_id:id},payload)
res.send({"msg":"updated"})
    }
    catch
    {
       res.send({"msg":"not updated"})
    }
})



cartRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    // const payload =req.body
    console.log(id)

    try
    {
await CartModel.findByIdAndDelete({_id:id})
res.send({"msg":"deleted"})
    }
    
    catch
    {
       res.send({"msg":"not deleted"})
    }
})



module.exports={
    cartRouter
}