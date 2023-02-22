const { UserModel } = require("../models/user.model");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt")
const userRouter = express.Router();
require("dotenv").config();

//

userRouter.post("/register", async (req, res) => {
  // res.send("post")
  const { firstname, lastname, email, password, mobile } = req.body;
  const user = await UserModel.find({ email });
  if (user.length === 0) {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send({ msg: "not registered" });
        } else {
          const user = new UserModel({
            firstname,
            lastname,
            email,
            password: hash,
            mobile,
          });
          await user.save();
          res.send("user registerd");
        }
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.send({ msg: "register by new id" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });
    console.log(user);

    if (user.length > 0) {
      // console.log("hello")
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          // console.log("hello")
          const token = jwt.sign({ userID: user[0]._id }, process.env.key);
          res.send({ "msg": "login successfull", "tokenID": token });
        } else {
          res.send({ "msg": "please type correct password" });
        }
      });
    } else {
      res.send({ "msg": "user id not registered" });
    }
  } catch (err) {
    console.log("something went wrong while login");
  }
});

module.exports = {
  userRouter,
};
