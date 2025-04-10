//imports
const express = require("express");

const {
  createMaleShoeController,
  retrieveMaleShoesController,
  updateMaleShoeController,
  deleteMaleShopController,
} = require("../Controllers/MaleShoeController");

const router = express.Router();

//routes
router.post("/maleshoes", createMaleShoeController);
router.get("/maleshoes/:id?", retrieveMaleShoesController);
router.put("/maleshoes/:id", updateMaleShoeController);
router.delete("/maleshoes/:id", deleteMaleShopController);

//exports
module.exports = router;
