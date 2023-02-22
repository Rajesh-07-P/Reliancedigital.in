const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model("user", userschema);

module.exports = {
  UserModel
};
