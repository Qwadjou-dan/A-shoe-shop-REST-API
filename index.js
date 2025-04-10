//imports
const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const shopRoute = require("./Routes/ShopRoute");
const maleShoeRoute = require("./Routes/MaleShoeRoute");

//initiate
const app = express();

//middleware
app.use(bodyParser.json());

//routes
app.use(shopRoute);
app.use(maleShoeRoute);

//start server
mongoose
  .connect(
    "mongodb+srv://DanDb:T85uAXINuod4ZBgA@cluster0.8kbvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(6060, "localhost", () => {
      console.log("Server is running on port 6060");
    });
  })
  .catch((error) => {
    console.log(error);
  });
