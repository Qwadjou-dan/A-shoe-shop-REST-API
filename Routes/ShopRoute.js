//imports
const express = require("express");

const {
  createShopController,
  retrieveShopsController,
  updateShopController,
  deleteShopController,
} = require("../Controllers/ShopController");

//create a new router object
const router = express.Router();

//routes
router.post("/shop", createShopController);
router.get("/shop/:id?", retrieveShopsController);
router.put("/shop/:id", updateShopController);
router.delete("/shop/:id", deleteShopController);

//exports
module.exports = router;
