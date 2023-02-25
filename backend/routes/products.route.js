const express = require("express");
const { ProductModel } = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {

    try {
      const products = await ProductModel.find( req.query  );
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send("Cannot fetch products");
    }
});

productRouter.get("/:id",async(req,res)=>{
    let id=req.params.id;
    try{
        const product =await ProductModel.findById({"_id":id});
        res.send(product);
    }catch(err){
        console.log(err);
        res.send("something went wrong");
    }
})

productRouter.post("/addproduct", async (req, res) => {
  const payload = req.body;
  try {
    // const product = new ProductModel(payload);

    // await product.save();
    await ProductModel.insertMany(payload);

    res.send("product added successfully");
  } catch (err) {
    console.log(err);
    res.send("something went wrong");
  }
});

module.exports = {
  productRouter,
};
