//imports
const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const shopRoute = require("./Routes/ShopRoute");

//initiate
const app = express();

//middleware
app.use(bodyParser.json());

//routes
app.use(shopRoute);

//start server
mongoose
  .connect(
    "mongodb+srv://DanDb:YDVboXPa3ERpJ6w9@cluster0.8kbvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(6060, "localhost", () => {
      console.log("Server is running on port 6060");
    });
  })
  .catch((error) => {
    console.log(error);
  });
