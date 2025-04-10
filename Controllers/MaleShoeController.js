//imports
const MaleShoeModel = require("../Model/MaleShoeModel");

//Controllers

const createMaleShoeController = async (req, res) => {
  try {
    const { shoeName, brand, category, size, shopId } = req.body;
    const maleShoe = MaleShoeModel({
      shoeName,
      brand,
      category,
      size,
      shopId,
    });
    await maleShoe
      .save()
      .then(() => {
        res.status(201).json({ message: "A male shoe added", data: maleShoe });
      })
      .catch((err) => console.log("No shoe added"));
  } catch (error) {
    res.status(404).json({ message: "error" });
  }
};

const retrieveMaleShoesController = (req, res) => {
  try {
    MaleShoeModel.find()
      .populate("shopId", "shopName location -_id")
      .then((maleShoe) => {
        res.status(200).json({ message: "Shoes retrieved", data: maleShoe });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

const updateMaleShoeController = (req, res) => {
  const { shoeName, brand, category, size } = req.body;
  let { id } = req.params;

  try {
    MaleShoeModel.findById(id).then((maleShoe) => {
      if (maleShoe) {
        maleShoe.shoeName = shoeName;
        maleShoe.brand = brand;
        maleShoe.category = category;
        maleShoe.size = size;
        maleShoe
          .save()
          .then((updatedShoe) => {
            res.status(200).json({ message: "Male Shoe", data: updatedShoe });
          })
          .catch((err) => console.log(err));
      }
    });
  } catch (error) {
    res.status(404).json({ message: "Male shoe not updated" });
  }
};

const deleteMaleShopController = async (req, res) => {
  let { id } = req.params;
  const deleteShoe = await MaleShoeModel.findByIdAndDelete(id);
  if (deleteShoe) {
    await deleteShoe.deleteOne();
    res.status(201).json({ message: "Shoe deleted", data: deleteShoe });
  } else {
    res.status(404).json("Shoe not found");
  }
};

module.exports = {
  createMaleShoeController,
  retrieveMaleShoesController,
  updateMaleShoeController,
  deleteMaleShopController,
};
