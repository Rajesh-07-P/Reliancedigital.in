const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

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