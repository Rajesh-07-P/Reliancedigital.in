const mongoose = require("mongoose");
const addressschema = mongoose.Schema({
    pincode : { type: Number, required: true },
    firstname : { type: String, required: true },
    lastname : { type: String, required: true },
    address: { type: String, required: true },
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    mobile: { type: Number, required: true },
    userID: { type: String }
});

const AddressModel = mongoose.model("address", addressschema);

module.exports = {
    AddressModel
};


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