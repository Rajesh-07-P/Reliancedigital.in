const mongoose = require("mongoose");
const addressschema = mongoose.Schema({
    pincode : Number,
    firstname : String,
    lastname : String,
    address: String,
    landmark:String,
    city:String,
    state:String,
    mobile:Number,
    userID: String
});

const AddressModel=mongoose.model("address",addressschema)

module.exports={
    AddressModel
}


// {
//     "pincode":12345,
//     "firstname":"vipul",
//     "lastname":"vatsa",
//     "address":"j-17 malkhan nagar aligarh",
//     "landmark":"amu",
//     "city":"aligarh",
//     "state":"up",
//     "mobile":8791744159
//   }