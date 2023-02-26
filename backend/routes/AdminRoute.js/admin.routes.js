const express = require('express')
const RegisterModel = require('../../models/AdminModels/AdminRegister.model')
const bcrypt = require('bcrypt')
const adminRouter = express.Router()
const jwt = require('jsonwebtoken')
require("dotenv").config();

const {fieldsAnalyzer}=require('../../middlewares/AdminMiddleware/fieldsAnalyzer.middleware')

adminRouter.post('/register', fieldsAnalyzer ,async (req, res) => {
  const { name, mobile, email, pass, gender } = req.body
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) res.send({ msg: "Something went wrong", error: err.message });
      else {
        const admin = new RegisterModel({ name, mobile, email, pass: hash, gender });
        await admin.save();
        res.status(201).send({ msg: "Admin has been registered" });
      }
    });
  } catch (error) {
    res.status(400).send({ msg: "Something went wrong", error: error.message });
  }
})

adminRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const admin = await RegisterModel.find({ email });
    if (admin.length > 0) {
      bcrypt.compare(pass, admin[0].pass, (err, result) => {
        if (result) {
          let token = jwt.sign({ adminID: admin[0]._id }, process.env.key);
          res.send({ msg: "Admin is loggedIn", token: token });
        } else {
          res.send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credentials" });
    }
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
});

adminRouter.patch('/forgot-password', async (req, res) => {
  const { email, pass } = req.body
  const data = await RegisterModel.find({ email })
  if (data.length > 0) {
    try {
      bcrypt.hash(pass, 5, async (err, hash) => {
        if (err) res.send({ msg: "Something went wrong", error: err.message });
        else {
          await RegisterModel.findOneAndUpdate({ email }, { pass:hash })
          res.status(201).send({ msg: "Password is Updated" })
         
        }
      });
    } catch (error) {
      res.send({ msg: "Email is not registered.", error: error.message });
    }
  }
  else {
    res.send({ msg: "Email is not registered." })
  }
})

module.exports = { adminRouter }