
const express = require("express");
const connection = require("./Configs/db");
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./Routes/auth.routes");
const router = require("./Routes/product.routes");
const app = express();
app.use(express.json());
const port = process.env.port || 9090;
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/user", userRouter);
app.use("/products", router);
app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});
app.listen(port, async () => {
  try {
    await connection;
    console.log("Connnection succesfull");
  } catch (error) {
    console.log(error);
  }
  console.log(`Running at port ${port}`);
});

