const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const { productRouter } = require("./routes/products.route");
const {userRouter}=require("./routes/user.route")
const {cartRouter}=require("./routes/cart.route")
const {addressRouter}=require("./routes/address.route")
const {authentication}=require("./middlewares/authenticate.middleware");
const { adminRouter } = require("./routes/AdminRoute.js/admin.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/users",userRouter)
app.use("/products",productRouter);

app.use("/admin",adminRouter)
app.use(authentication)

app.use("/address",addressRouter)
app.use("/cart",cartRouter)



app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
    console.log("trouble in connecting to db");
  }
  console.log(`server started at port ${process.env.port}`);
});