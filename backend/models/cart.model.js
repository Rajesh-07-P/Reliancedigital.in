const mongoose = require("mongoose");
const cartschema = mongoose.Schema({
    title : String,
    images : [{type: String}],
    mrp : Number,
    brand : String,
    category:String,
    quantity:Number,
    price:Number,
    discount:Number,
    userID: String
    
});

const CartModel=mongoose.model("cart",cartschema)

module.exports={
    CartModel
}