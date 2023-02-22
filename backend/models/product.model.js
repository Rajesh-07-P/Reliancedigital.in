const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    title:String,
    images:[{type:String}],
    brand:String,
    category:String,
    quantity:Number,
    mrp:Number,
    price:Number,
    discount:Number
});

const ProductModel=mongoose.model("products",productSchema);

module.exports={
    ProductModel
}